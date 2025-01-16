"use server";

import Contact from "@/models/Contact.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const contact = await Contact.create({ name, email, message });
      return res
        .status(201)
        .json({ message: "Message sent successfully", data: contact });
    } catch (error) {
      return res.status(400).json({ error: "Failed to save contact." });
    }
  } else {
    return res.status(405).json({ error: `${req.method} method not allowed` });
  }
}
