import fs from "fs";
import path from "path";

// Read JSON once
const kuralsRaw = fs.readFileSync(path.join(process.cwd(), "thirukkural.json"), "utf-8");
const kurals = JSON.parse(kuralsRaw);

// Class
export class KuralObject {
  constructor() {
    this.number = 0;
    this.kural = { tamil: [], english: [] };
    this.adhiharam = { tamil: "", english: "" };
    this.pal = { tamil: "", english: "" };
    this.iyal = { tamil: "", english: "" };
    this.meaning = { tamil: "", english: "" };
  }
}

// Map function
export const mapKural = () => {
  const convertedKurals = [];
  Object.entries(kurals).forEach(([_, value]) => {
    const data = new KuralObject();
    data.number = value["0_number"];
    data.adhiharam.tamil = value["2_adikaram"];
    data.adhiharam.english = value["2_translation"];
    data.kural.tamil = value["1_kural"];
    data.kural.english = value["1_kural"];
    data.iyal.tamil = value["4_iyal"];
    data.iyal.english = value["4_transliteration"];
    data.pal.tamil = value["3_pal"];
    data.pal.english = value["3_translation"];
    data.meaning.tamil = value["5_mk"];
    data.meaning.english = value["5_explanation"];
    convertedKurals.push(data);
  });
  return convertedKurals;
};
