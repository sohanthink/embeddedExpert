import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
const openai = new OpenAI(process.env.OPENAI_KEY);

async function generateEmbeddings() {
  // 1. Fetch courses with NULL embeddings
  const { data: courses, error } = await supabase
    .from("courses")
    .select("id, description")
    .is("embedding", null);

  // 2. Generate embeddings for each course
  for (const course of courses) {
    const embedding = await openai.embeddings.create({
      input: course.description,
      model: "text-embedding-3-small",
    });

    // 3. Update Supabase with the embedding
    await supabase
      .from("courses")
      .update({ embedding: embedding.data[0].embedding })
      .eq("id", course.id);
  }
}

generateEmbeddings();
