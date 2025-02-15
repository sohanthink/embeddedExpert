import affiliateEmail from "@/lib/mail/affiliateEmail";
import Affiliate from "@/models/Affiliate.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, courseType } = req.body;

    try {
      const affiliate = await Affiliate.create({
        name,
        email,
        phone,
        courseType,
      });
      await affiliateEmail(affiliate);
      // await contactEmail(name, email, message);
      return res
        .status(201)
        .json({ message: "Affiliate form submitted", data: affiliate });
    } catch (error) {
      return res.status(400).json({ error: "Failed to save Affiliate." });
    }
  } else {
    return res.status(405).json({ error: `${req.method} method not allowed` });
  }
}
