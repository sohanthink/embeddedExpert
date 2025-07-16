"use server";

import Subscribe from "@/models/Subscribe";
import subscribeEmail from "@/lib/mail/subscribeEmail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const subscribed = await Subscribe.create({ email });

      // Send email notification
      try {
        await subscribeEmail(email);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails, just log it
      }

      return res
        .status(201)
        .json({ message: "Subscribed successfully", data: subscribed });
    } catch (error) {
      console.error("Error in subscribe API:", error);
      return res.status(400).json({ error: "Failed to Subscribe." });
    }
  } else {
    return res.status(405).json({ error: `${req.method} method not allowed` });
  }
}
