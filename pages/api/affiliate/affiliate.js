import Affiliate from "@/models/Affiliate.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, courseType } = req.body;

    try {
      const contact = await Affiliate.create({
        name,
        email,
        phone,
        courseType,
      });
      return res
        .status(201)
        .json({ message: "Affiliate form submitted", data: contact });
    } catch (error) {
      return res.status(400).json({ error: "Failed to save Affiliate." });
    }
  } else {
    return res.status(405).json({ error: `${req.method} method not allowed` });
  }
}
