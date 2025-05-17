import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function uploadCourses() {
  try {
    // 1. Load and validate data
    const filePath = path.join(process.cwd(), "data/chat.json");
    console.log(`Loading data from: ${filePath}`);

    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    // 2. Extract all courses from nested structure
    const courses = jsonData.data.flatMap((item) =>
      item.type === "courses" ? item.course : []
    );

    console.log(`Found ${courses.length} course items`);

    if (courses.length === 0) {
      console.log("Top-level structure:", Object.keys(jsonData));
      console.log(
        "First data item structure:",
        jsonData.data[0] ? Object.keys(jsonData.data[0]) : "No items"
      );
      throw new Error("No course items found - check your data structure");
    }

    // 3. Process each course
    for (const [index, course] of courses.entries()) {
      try {
        // Extract data from content text if not in metadata
        const extractFromContent = (field) => {
          const match = course.content?.match(
            new RegExp(`${field}: (.+?)(\\n|$)`)
          );
          return match ? match[1].trim() : null;
        };

        const courseData = {
          id: uuidv4(),
          title:
            course.metadata?.title ||
            extractFromContent("Course") ||
            "Untitled Course",
          description:
            course.metadata?.description ||
            extractFromContent("Description") ||
            "",
          category:
            course.metadata?.category ||
            extractFromContent("Category") ||
            "General",
          lessons:
            course.metadata?.lessons ||
            parseInt(extractFromContent("Lessons")) ||
            0,
          duration_minutes:
            course.metadata?.time ||
            parseInt(extractFromContent("Duration")) ||
            0,
          tags: course.tags || [],
          metadata: {
            link: course.metadata?.link,
            image: course.metadata?.image,
            original_content: course.content, // preserve raw data
          },
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        console.log(
          `Processing course ${index + 1}/${courses.length}: ${
            courseData.title
          }`
        );

        // Insert into database
        const { error } = await supabase.from("courses").insert(courseData);

        if (error) throw error;
        console.log(`✅ Uploaded: ${courseData.title}`);
      } catch (error) {
        console.error(
          `❌ Failed to upload course ${index + 1}:`,
          error.message
        );
        fs.writeFileSync(
          `failed_course_${index}.json`,
          JSON.stringify(course, null, 2)
        );
      }
    }

    console.log("🚀 Course upload complete!");
    console.log(
      `Success: ${
        courses.length -
        fs.readdirSync(".").filter((f) => f.startsWith("failed_course")).length
      }/${courses.length}`
    );
  } catch (error) {
    console.error("🔥 Fatal error:", error.message);
    process.exit(1);
  }
}

// Verify environment
console.log("Environment check:", {
  SUPABASE_URL: process.env.SUPABASE_URL ? "✅" : "❌",
  SUPABASE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅" : "❌",
});

// First test connection
supabase
  .from("courses")
  .select("*")
  .limit(1)
  .then(({ error }) => {
    if (error) throw error;
    console.log("✅ Database connection verified");
    return uploadCourses();
  })
  .catch((err) => {
    console.error("❌ Initialization failed:", err.message);
    process.exit(1);
  });
