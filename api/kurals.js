import { mapKural } from "../lib/kuralsHelper";

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = mapKural();
    res.status(200).json({ count: data.length, data });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
