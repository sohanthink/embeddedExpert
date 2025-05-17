import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { OpenAI } from "openai";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Configuration
const BATCH_SIZE = 5;
const EMBEDDING_MODEL = "text-embedding-3-small";

// Helper functions
async function getEmbeddings(texts) {
  const response = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: texts.filter((text) => text && text.trim().length > 0),
  });
  return response.data.map((item) => item.embedding);
}

function logProgress(current, total, type) {
  console.log(
    `🔄 [${type}] Processed ${current} of ${total} (${Math.round(
      (current / total) * 100
    )}%)`
  );
}

// Data processors
async function processCourses(jsonData) {
  // 1. Extract courses array
  const courses = jsonData.data?.data || [];
  console.log(`Found ${courses.length} courses`);

  // 2. Process each course individually
  for (const [index, course] of courses.entries()) {
    try {
      // 3. Prepare simple data structure
      const courseData = {
        id: uuidv4(),
        title: course.metadata?.title || "Untitled Course",
        description:
          course.content
            ?.split("\n")
            .find((l) => l.includes("Description:"))
            ?.split("Description:")[1]
            ?.trim() || "",
        created_at: new Date().toISOString(),
      };

      console.log(
        `Uploading ${index + 1}/${courses.length}: ${courseData.title}`
      );

      // 4. Simple insert
      const { error } = await supabase.from("courses").insert(courseData);

      if (error) throw error;

      console.log(`✅ Success: ${courseData.title}`);
    } catch (error) {
      console.error(`❌ Failed to upload course ${index + 1}:`, error.message);
      fs.writeFileSync(
        `failed_course_${index}.json`,
        JSON.stringify(course, null, 2)
      );
    }
  }
}

async function processCompanyInfo(data) {
  if (!data.name) return;

  const companyData = {
    id: uuidv4(),
    name: data.name,
    about: data.about || "",
    services: data.services || [],
    tags: data.tags || [],
    metadata: data.metadata || {},
  };

  await supabase.from("company_info").insert(companyData);
  console.log("✅ Company info uploaded");
}

async function processAffiliatePrograms(data) {
  if (!data.content) return;

  const [reason, ...details] = data.content.split("\n");
  const affiliateData = {
    id: uuidv4(),
    reason: reason.replace("Reason:", "").trim(),
    details: details.join("\n").replace("Details:", "").trim(),
    tags: data.tags || [],
    metadata: data.metadata || {},
  };

  await supabase.from("affiliate_programs").insert(affiliateData);
  console.log("✅ Affiliate program uploaded");
}

async function processFAQs(faqs) {
  console.log(`❓ Processing ${faqs.questions.length} FAQs...`);

  for (let i = 0; i < faqs.questions.length; i += BATCH_SIZE) {
    const batch = faqs.questions.slice(i, i + BATCH_SIZE);
    const faqData = batch.map((q) => ({
      id: uuidv4(),
      question: q.question,
      answer: q.answer,
      tags: q.tags || [],
      metadata: q.metadata || {},
    }));

    try {
      const embeddings = await getEmbeddings(
        faqData.map((q) => `${q.question}\n${q.answer}`)
      );

      const { error } = await supabase
        .from("faqs")
        .insert(
          faqData.map((q, idx) => ({ ...q, embedding: embeddings[idx] }))
        );

      if (error) throw error;
      logProgress(
        Math.min(i + BATCH_SIZE, faqs.questions.length),
        faqs.questions.length,
        "FAQs"
      );
    } catch (error) {
      console.error(`❌ Failed FAQ batch:`, error.message);
    }
  }
}

async function processResources(resources) {
  const resourceData = {
    id: uuidv4(),
    title: resources.title,
    description: resources.description,
    preview_link: resources.previewLink,
    tags: resources.tags || [],
    metadata: resources.metadata || {},
  };

  await supabase.from("resources").insert(resourceData);
  console.log("✅ Resource uploaded");
}

async function processReviews(reviews) {
  console.log(`⭐ Processing ${reviews.reviews.length} reviews...`);

  for (const review of reviews.reviews) {
    const reviewData = {
      id: uuidv4(),
      review: review.review || review.quote,
      course_name: review.course || review.metadata?.course?.title,
      reviewer_name: review.reviewer || review.person?.name,
      reviewer_role: review.designation || review.person?.role,
      country: review.country || review.person?.location?.country,
      tags: review.tags || [],
      metadata: review.metadata || {},
    };

    await supabase.from("reviews").insert(reviewData);
  }
  console.log(`✅ ${reviews.reviews.length} reviews uploaded`);
}

async function processTestimonials(testimonials) {
  console.log(
    `🗣️ Processing ${testimonials.testimonials.length} testimonials...`
  );

  for (const testimonial of testimonials.testimonials) {
    const testimonialData = {
      id: uuidv4(),
      quote: testimonial.quote || testimonial.review,
      reviewer_name: testimonial.name || testimonial.person?.name,
      reviewer_role: testimonial.designation || testimonial.person?.role,
      country: testimonial.country || testimonial.person?.location?.country,
      tags: testimonial.tags || [],
      metadata: testimonial.metadata || {},
    };

    await supabase.from("testimonials").insert(testimonialData);
  }
  console.log(`✅ ${testimonials.testimonials.length} testimonials uploaded`);
}

async function processCoursesSummary(summary) {
  const summaryData = {
    id: uuidv4(),
    total_courses: summary.summary?.total_courses || 0,
    categories: summary.summary?.categories || [],
    tags: summary.tags || [],
    metadata: summary.metadata || {},
  };

  await supabase.from("courses_summary").insert(summaryData);
  console.log("✅ Courses summary uploaded");
}

async function processInstructors(instructor) {
  const instructorData = {
    id: uuidv4(),
    name: instructor.metadata?.name || "Israel Gbati",
    bio: instructor.content.split("Bio:")[1]?.trim() || "",
    degrees: instructor.metadata?.degrees || [],
    achievements: instructor.metadata?.achievements || [],
    tags: instructor.tags || [],
    metadata: instructor.metadata || {},
  };

  await supabase.from("instructors").insert(instructorData);
  console.log("✅ Instructor profile uploaded");
}

async function processTechnologies(tech) {
  const techData = {
    id: uuidv4(),
    technology_list: tech.technologies || [],
    tags: tech.tags || [],
    metadata: tech.metadata || {},
  };

  await supabase.from("technologies").insert(techData);
  console.log("✅ Technologies uploaded");
}

// Main function
async function processData() {
  try {
    const filePath = path.join(process.cwd(), "data/chat.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    // Process based on type
    for (const item of jsonData.data || []) {
      switch (item.type) {
        case "CompanyInfo":
          await processCompanyInfo(item);
          break;
        case "affiliate":
          await processAffiliatePrograms(item);
          break;
        case "FAQ":
          await processFAQs(item);
          break;
        case "Resource":
          await processResources(item);
          break;
        case "Review":
          await processReviews(item);
          break;
        case "Testimonial":
          await processTestimonials(item);
          break;
        case "CoursesSummary":
          await processCoursesSummary(item);
          break;
        case "instructor":
          await processInstructors(item);
          break;
        case "Technology":
          await processTechnologies(item);
          break;
        case "courses":
          await processCourses([item]); // Wrap in array for batch processing
          break;
        default:
          console.warn(`⚠️ Unknown type: ${item.type}`);
      }
    }

    console.log("🚀 All data processed successfully!");
  } catch (error) {
    console.error("🔥 Critical error:", error);
    process.exit(1);
  }
}

// Startup
console.log("Starting data upload...");
console.log("Environment check:", {
  SUPABASE_URL: process.env.SUPABASE_URL ? "✅" : "❌",
  SUPABASE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅" : "❌",
  OPENAI_KEY: process.env.OPENAI_API_KEY ? "✅" : "❌",
});

processData();
