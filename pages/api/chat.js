import { OpenAI } from "openai";
import Fuse from "fuse.js";
import jsonData from "@/data/data.json"; // Import your JSON file

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "", // Ensure this is set in your environment
});

// Flatten nested data to make everything searchable
const flattenData = (data) => {
  const flatData = [];

  data.forEach((item) => {
    if (item.questions) {
      flatData.push(...item.questions); // Extract 'questions' from FAQ
    } else if (item.courses) {
      flatData.push(...item.courses); // Extract 'courses'
    } else if (item.reasons) {
      flatData.push(...item.reasons); // Extract 'reasons' from AffiliatePartner
    } else if (item.testimonials) {
      flatData.push(...item.testimonials); // Extract 'testimonials'
    } else if (item.services) {
      flatData.push({ description: item.services.join(", "), ...item }); // Flatten 'services'
    } else if (item.reviews) {
      flatData.push(...item.reviews); // Flatten 'reviews'
    } else {
      flatData.push(item); // Include everything else
    }
  });

  return flatData;
};

// Main filter function
const filterData = (query, data) => {
  const flatData = flattenData(data);
  console.log("Flat data:", flatData); // Log the flattened data

  // Preprocess query
  const preprocessQuery = (query) => query.toLowerCase().trim();
  const processedQuery = preprocessQuery(query);
  console.log("Processed query:", processedQuery); // Log the processed query

  // Fuzzy matching with Fuse.js
  const fuse = new Fuse(flatData, {
    keys: ["name", "description", "tags", "category"], // Include all relevant fields
    threshold: 0.5, // Increase threshold for broader matching
    distance: 100, // Adjust distance for better results
    shouldSort: true,
  });

  const results = fuse.search(processedQuery).map((result) => result.item);
  console.log("Filtered results:", results); // Log the filtered results
  return results.slice(0, 5); // Return only the top 5 results
};

// Build context dynamically
const buildContext = (filteredResults, query) => {
  // If the user asks about courses, list them
  if (query.toLowerCase().includes("course")) {
    const courses = filteredResults
      .filter((item) => item.name && item.description) // Ensure the item is a course
      .map(
        (item) =>
          `**${item.name}**\n- Description: ${item.description}\n- Link: ${item.course_link}`
      )
      .join("\n\n");

    console.log("Courses context:", courses); // Log the courses context
    return courses;
  }

  // Default: Include all filtered results
  const context = filteredResults
    .map((item) => {
      if (item.question) return `Q: ${item.question}\nA: ${item.answer}`;
      if (item.title)
        return `Resource: ${item.title}\nDescription: ${item.description}\nReason: ${item.reason}`;
      if (item.name && item.description && item.category)
        return `Course name: ${item.name}\nDescription: ${item.description}\nCourse Link: ${item.course_link}`;
      if (item.course) return `Course: ${item.course}\nReview: ${item.review}`;
      if (item.name && item.testimonial)
        return `Testimonial by ${item.name}: "${item.testimonial}"`;
      return `Info: ${item.description || item.about || ""}`;
    })
    .join("\n\n");

  console.log("Default context:", context); // Log the default context
  return context;
};

// Main API handler
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "A valid message is required." });
  }

  try {
    // Step 1: Search the JSON data
    const filteredResults = filterData(message, jsonData.data);
    console.log("Filtered results:", filteredResults); // Log filtered results

    // Step 2: Format context dynamically for GPT
    const context = buildContext(filteredResults, message);
    console.log("Context:", context); // Log the context

    // Step 3: Handle specific queries (e.g., "What courses do you have?")
    if (message.toLowerCase().includes("course")) {
      const courseList = filteredResults
        .filter((item) => item.name && item.description)
        .map(
          (item) =>
            `**${item.name}**\n- Description: ${item.description}\n- Link: ${item.course_link}`
        )
        .join("\n\n");

      if (courseList) {
        const reply = `Here are some of the courses we offer:\n\n${courseList}`;
        return res.status(200).json({ reply });
      } else {
        return res
          .status(200)
          .json({ reply: "We couldn't find any courses matching your query." });
      }
    }

    // Step 4: Call OpenAI API with formatted context
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant. Use the following context to answer questions:\n\n${context}`,
        },
        { role: "user", content: message },
      ],
      max_tokens: 1000,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "I couldn't find a detailed answer.";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Error processing request:", error.stack); // Log detailed error
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
