import { createClient } from "@supabase/supabase-js";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  console.log("Received message:", message);

  if (!message?.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // 1. Generate embedding for the query
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message.replace(/\n/g, " "),
    });
    const embedding = embeddingRes.data[0].embedding;

    console.log("Generated embedding:", embedding);

    // 2. First try semantic search
    const { data: courses, error: vectorError } = await supabase.rpc(
      "match_courses",
      {
        query_embedding: embedding,
        match_threshold: 0.5, // Lowered threshold
        match_count: 10,
      }
    );
    console.log("courses", courses);

    // 3. If no results, try direct text search as fallback
    let results = courses || [];
    if (!results.length) {
      const { data: textMatches } = await supabase
        .from("courses")
        .select("*, similarity(title, $query) as sim", {
          params: { query: message },
        })
        .order("sim", { ascending: false })
        .limit(3);
      results = textMatches || [];
    }

    // 4. Format response
    if (results.length > 0) {
      const courseList = results
        .map((course) => {
          const durationHours = Math.floor(course.duration_minutes / 60);
          const durationMins = course.duration_minutes % 60;
          const duration =
            durationHours > 0
              ? `${durationHours}h ${durationMins}m`
              : `${durationMins}m`;

          return `**${course.title}**  
🔗 [Course Link](${course.metadata?.link || "#"})  
📚 ${course.lessons} lessons | ⏱️ ${duration}  
📌 Category: ${course.category}  
🔖 Tags: ${course.tags?.join(", ") || "None"}  

${course.description}  

${course.metadata?.image ? `![Course Image](${course.metadata.image})` : ""}`;
        })
        .join("\n\n---\n\n");

      // 5. Generate polished response
      const systemPrompt = `You are EmbeddedExpert's course assistant. Use ONLY these courses:

${courseList}

Response Rules:
1. Use EXACT course titles/links from above
2. List ALL relevant courses
3. Format with Markdown:
   - **Bold** titles
   - Real links only
   - Separate courses with ---
4. If unsure, say "Here are relevant courses:" then list them`;

      const chatResponse = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Question: ${message}` },
        ],
        temperature: 0.3, // Low for accuracy
        max_tokens: 1000,
      });

      res.status(200).json({
        answer: chatResponse.choices[0].message.content,
        sources: results.map((c) => ({
          title: c.title,
          link: c.metadata?.link,
          image: c.metadata?.image,
          similarity: c.similarity || 0,
        })),
      });
    } else {
      // 6. No results fallback
      res.status(200).json({
        answer: `No courses found for "${message}". Try these topics:\n- ARM Assembly Programming\n- Embedded C\n- RTOS Development`,
        sources: [],
      });
    }
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({
      error: "Failed to process your request",
      details: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
}
