import { mapKural } from "../../lib/kuralsHelper";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { pal, isEnglish } = req.body;
    if (!pal || typeof isEnglish !== "boolean") {
      return res.status(400).json({ error: "Invalid input" });
    }

    const data = mapKural().filter((v) =>
      isEnglish ? v.pal.english.includes(pal) : v.pal.tamil.includes(pal)
    );

    res.status(200).json({ count: data.length, data });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
