import { OpenAI } from "openai";
import Fuse from "fuse.js";
import chatData from "@/data/chat.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// Improved data extractor
const extractData = () => {
  const data = {
    courses: [],
    faqs: [],
    reviews: [],
    testimonials: [],
    companyInfo: null,
    resources: [],
    technologies: [],
  };

  chatData.data.forEach((item) => {
    switch (item.type) {
      case "Course":
        data.courses = item.courses || [];
        break;
      case "FAQ":
        data.faqs = item.questions || [];
        break;
      case "Review":
        data.reviews = item.reviews || [];
        break;
      case "Testimonial":
        data.testimonials = item.testimonials || [];
        break;
      case "CompanyInfo":
        data.companyInfo = item;
        break;
      case "Resource":
        data.resources.push(item);
        break;
      case "Technology":
        data.technologies = item.technologies || [];
        break;
    }
  });

  return data;
};

// Context builder with natural language summaries
const buildContext = (data) => {
  let context =
    "You are a helpful assistant for EmbeddedExpert.io, an embedded systems education platform. ";

  if (data.companyInfo) {
    context += `\n\nAbout the company: ${
      data.companyInfo.name
    } - ${data.companyInfo.about.substring(0, 200)}...`;
  }

  if (data.courses.length > 0) {
    context += `\n\nAvailable courses (${data.courses.length} total):`;
    data.courses.slice(0, 5).forEach((course) => {
      context += `\n- ${course.name} (${
        course.category
      }): ${course.description.substring(0, 100)}\nCourse link- ${
        course.course_link
      }...`;
    });
  }

  if (data.faqs.length > 0) {
    context += `\n\nCommon questions:`;
    data.faqs.slice(0, 3).forEach((faq) => {
      context += `\n- Q: ${faq.question}\n  A: ${faq.answer.substring(
        0,
        100
      )}...`;
    });
  }

  if (data.reviews.length > 0) {
    context += `\n\nRecent student feedback:`;
    data.reviews.slice(0, 3).forEach((review) => {
      context += `\n- "${review.review.substring(0, 80)}..." - ${
        review.name || review.reviewer
      }`;
    });
  }

  return context;
};

// Search within specific data types
const searchData = (query, data) => {
  const results = [];
  const options = { threshold: 0.4, includeScore: true };

  // Search courses
  const courseFuse = new Fuse(data.courses, {
    ...options,
    keys: ["name", "description", "course_link", "category", "tags"],
  });
  results.push(
    ...courseFuse.search(query).map((r) => ({ ...r.item, type: "course" }))
  );

  // Search FAQs
  const faqFuse = new Fuse(data.faqs, {
    ...options,
    keys: ["question", "answer", "tags"],
  });
  results.push(
    ...faqFuse.search(query).map((r) => ({ ...r.item, type: "faq" }))
  );

  // Search reviews
  const reviewFuse = new Fuse(data.reviews, {
    ...options,
    keys: ["review", "course", "course_name", "name", "reviewer"],
  });
  results.push(
    ...reviewFuse.search(query).map((r) => ({ ...r.item, type: "review" }))
  );

  return results.sort((a, b) => a.score - b.score).slice(0, 5);
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Extract and organize data
    const data = extractData();
    const context = buildContext(data);
    const searchResults = searchData(message, data);

    // Prepare recent data for context
    let recentInfo = "Recent information from our database:\n";
    searchResults.forEach((result) => {
      switch (result.type) {
        case "course":
          recentInfo += `\nCourse: ${
            result.name
          }\nDescription: ${result.description.substring(
            0,
            150
          )}...\nCourse Link:- ${result.course_link}\n`;
          break;
        case "faq":
          recentInfo += `\nQuestion: ${
            result.question
          }\nAnswer: ${result.answer.substring(0, 150)}...\n`;
          break;
        case "review":
          recentInfo += `\nReview: ${result.review.substring(0, 150)}...\nBy: ${
            result.name || result.reviewer
          }\n`;
          break;
      }
    });

    // Generate natural response
    const prompt = `
      ${context}
      
      ${recentInfo}
      
      The user asked: "${message}"
      
      Respond naturally as a human representative would, using the information above. 
      Be friendly, helpful, and professional. If you don't know something, say so politely.
      Keep responses concise but informative.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "I couldn't generate a response. Please try asking differently.";

    return res.status(200).json({
      reply,
      tokens: completion.usage?.total_tokens || 0,
    });
  } catch (error) {
    console.error("Chat error:", error);
    return res.status(500).json({
      error: "An error occurred while processing your message",
      details: error.message,
    });
  }
}
