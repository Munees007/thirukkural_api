import { mapKural } from "../../lib/kuralsHelper";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { adhiharam, isEnglish } = req.body;
    if (!adhiharam || typeof isEnglish !== "boolean") {
      return res.status(400).json({ error: "Invalid input" });
    }

    const data = mapKural().filter((v) =>
      isEnglish ? v.adhiharam.english.includes(adhiharam) : v.adhiharam.tamil.includes(adhiharam)
    );

    res.status(200).json({ count: data.length, data });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
