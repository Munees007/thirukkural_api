import { mapKural } from "../../lib/kuralsHelper";

export default function handler(req, res) {
  if (req.method === "POST") {
    const num = parseInt(req.body.num);
    if (!num) return res.status(400).json({ error: "Number is required" });

    const data = mapKural().find((v) => v.number === num);
    if (!data) return res.status(404).json({ error: "Kural not found" });

    res.status(200).json({ data });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
