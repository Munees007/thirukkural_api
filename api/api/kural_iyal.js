import { mapKural } from "../../lib/kuralsHelper";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { iyal, isEnglish } = req.body;
    if (!iyal || typeof isEnglish !== "boolean") {
      return res.status(400).json({ error: "Invalid input" });
    }

    const data = mapKural().filter((v) =>
      isEnglish ? v.iyal.english.includes(iyal) : v.iyal.tamil.includes(iyal)
    );

    res.status(200).json({ count: data.length, data });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
