"use server";

import Subscribe from "@/models/Subscribe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const subscribed = await Subscribe.create({ email });
      return res
        .status(201)
        .json({ message: "Subscribed successfully", data: subscribed });
    } catch (error) {
      return res.status(400).json({ error: "Failed to Subscribe." });
    }
  } else {
    return res.status(405).json({ error: `${req.method} method not allowed` });
  }
}
