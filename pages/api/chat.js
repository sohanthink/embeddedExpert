import { OpenAI } from "openai";
import Fuse from "fuse.js";
import jsonData from "@/data/chat.json"; // Import your JSON file

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "", // Ensure this is set in your environment
});

// Helper function to calculate tokens
const calculateTokens = (text) => {
  // Approximate token calculation: 1 token ~= 4 characters or 0.75 words
  return Math.ceil(text.split(/\s+/).length * 0.75);
};

// Flatten nested data to make everything searchable
const flattenData = (data) => {
  const flatData = [];

  data.forEach((item) => {
    if (item.questions) flatData.push(...item.questions);
    if (item.courses) flatData.push(...item.courses);
    if (item.reasons) flatData.push(...item.reasons);
    if (item.reviews) flatData.push(...item.reviews);
    if (item.CompanyInfo) flatData.push(item.CompanyInfo);
    if (item.FAQ) flatData.push(...item.FAQ);
    if (item.Resource) flatData.push(item.Resource);
    if (item.Review) flatData.push(item.Review);
    if (item.Technology) flatData.push(item.Technology);
    if (item.Testimonial) flatData.push(item.Testimonial);
    if (item.Instructor) flatData.push(item.Instructor);
    else flatData.push(item); // Include everything else
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
    keys: [
      "name",
      "description",
      "tags",
      "category",
      "review",
      "course",
      "question",
      "answer",
      "type",
      "Technology",
      "Testimonial",
      "Instructor",
    ], // Include all relevant fields
    threshold: 0.4, // Lower threshold for stricter matching
    distance: 50, // Adjust distance for better results
    shouldSort: true,
  });

  const results = fuse.search(processedQuery).map((result) => result.item);
  console.log("Filtered results:", results); // Log the filtered results
  return results.slice(0, 5); // Return only the top 5 results
};

// Build context dynamically
const buildContext = (filteredResults, query) => {
  // Handle specific intents
  if (query.toLowerCase().includes("course")) {
    const courses = filteredResults
      .filter((item) => item.name && item.description) // Ensure the item is a course
      .map(
        (item) =>
          `**${item.name}**\n- Description: ${item.description}\n- Link: ${
            item.course_link || "N/A"
          }`
      )
      .join("\n\n");

    console.log("Courses context:", courses); // Log the courses context
    return courses;
  }

  if (query.toLowerCase().includes("review")) {
    const reviews = filteredResults
      .filter((item) => item.review) // Ensure the item is a review
      .map(
        (item) =>
          `**Review by ${item.name || item.reviewer}**\n- Course: ${
            item.course || item.course_name
          }\n- Review: ${item.review}\n- Link: ${item.course_link || "N/A"}`
      )
      .join("\n\n");

    console.log("Reviews context:", reviews); // Log the reviews context
    return reviews;
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

    // Step 2: Handle specific intents
    if (message.toLowerCase().includes("how many courses")) {
      const courses = jsonData.data
        .filter((item) => item.courses) // Extract items with 'courses'
        .flatMap((item) => item.courses); // Flatten the courses array

      const courseCount = courses.length;
      const reply = `We have ${courseCount} courses available. 🎉 Here are some popular ones:\n\n${courses
        .slice(0, 3)
        .map(
          (course) =>
            `**${course.name}**\n- Description: ${
              course.description
            }\n- Link: ${course.course_link || "N/A"}`
        )
        .join("\n\n")}`;
      const tokens = calculateTokens(reply);
      console.log("Tokens used:", tokens); // Log tokens used
      return res.status(200).json({ reply, tokens });
    }

    if (message.toLowerCase().includes("show me some courses")) {
      const courses = filteredResults
        .filter((item) => item.name && item.description) // Ensure the item is a course
        .map(
          (item) =>
            `**${item.name}**\n- Description: ${item.description}\n- Link: ${
              item.course_link || "N/A"
            }`
        )
        .join("\n\n");

      const reply = `Here are some courses you might like:\n\n${courses}`;
      const tokens = calculateTokens(reply);
      console.log("Tokens used:", tokens); // Log tokens used
      return res.status(200).json({ reply, tokens });
    }

    if (message.toLowerCase().includes("show me some reviews")) {
      const reviews = filteredResults
        .filter((item) => item.review) // Ensure the item is a review
        .map(
          (item) =>
            `**Review by ${item.name || item.reviewer}**\n- Course: ${
              item.course || item.course_name
            }\n- Review: ${item.review}\n- Link: ${item.course_link || "N/A"}`
        )
        .join("\n\n");

      // Fallback if no reviews are found
      if (reviews.length === 0) {
        const reply =
          "I couldn't find any reviews at the moment. 😔 Please visit our website or contact us through the contact form for further assistance.";
        const tokens = calculateTokens(reply);
        console.log("Tokens used:", tokens); // Log tokens used
        return res.status(200).json({ reply, tokens });
      }

      const reply = `Here are some reviews from our students:\n\n${reviews}`;
      const tokens = calculateTokens(reply);
      console.log("Tokens used:", tokens); // Log tokens used
      return res.status(200).json({ reply, tokens });
    }

    // Step 3: Format context dynamically for GPT
    const context = buildContext(filteredResults, message);
    console.log("Context:", context); // Log the context

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
      "I couldn't find a detailed answer. Could you please provide more details? 😊";
    const tokens = calculateTokens(reply);
    console.log("Tokens used:", tokens); // Log tokens used
    return res.status(200).json({ reply, tokens });
  } catch (error) {
    console.error("Error processing request:", error.stack); // Log detailed error
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
