import sequelize from "@/lib/sequelize";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const [data] = await sequelize.query("SELECT * FROM Livedata");

      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      return res.status(500).json({ error: "Failed to fetch banner data" });
    }
  } else {
    return res.status(405).json({ error: `${req.method} method not allowed` });
  }
}
