const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

const kuralsRaw = fs.readFileSync("./thirukkural.json","utf-8");
const kurals = JSON.parse(kuralsRaw);

class KuralObject {
  constructor(number) {
    this.number = 0;
    this.kural = {
      tamil: [],
      english: []
    };
    this.adhiharam = {
      tamil: "",
      english: ""
    };
    this.pal = {
      tamil: "",
      english: ""
    };
    this.iyal = {
      tamil: "",
      english: ""
    };
    this.meaning = {
      tamil: "",
      english: ""
    };
  }
}


const mapKural = (kurals) =>{
        const convertedKurals = []
    
    Object.entries(kurals).map((value,index)=>{
        value = value[1];
        const data = new KuralObject();
        data.number = value["0_number"];
        data.adhiharam.tamil = value["2_adikaram"];
        data.adhiharam.english = value["2_translation"]
        data.kural.tamil = value["1_kural"]
        data.kural.english = value["1_kural"]
        data.iyal.tamil = value["4_iyal"]
        data.iyal.english = value["4_transliteration"]
        data.pal.tamil = value["3_pal"]
        data.pal.english = value["3_translation"]
        data.meaning.tamil = value["5_mk"]
        data.meaning.english = value["5_explanation"]

        convertedKurals.push(data);
    })
    return convertedKurals;
}

app.post("/api/kurals",(req,res)=>{
    const data = mapKural(kurals);
    res.json({count:data.length,data});
})

app.post("/api/kural_single",(req,res)=>{
    let num = parseInt(req.body.num);

    let data = mapKural(kurals)
    data = data.find((value)=> value.number === num)
    
    res.json({count:data.length,data});

})

app.post("/api/kural_adhiharam",(req,res)=>{
    const { adhiharam, isEnglish } = req.body;

  if (!adhiharam || typeof isEnglish !== "boolean") {
    return res.status(400).json({ error: "Invalid input" });
  }

    let data = mapKural(kurals);

    data = data.filter((value) => 
  isEnglish
    ? value.adhiharam.english.includes(adhiharam)
    : value.adhiharam.tamil.includes(adhiharam)
);

    res.json({count:data.length,data});
})

app.post("/api/kural_pal",(req,res)=>{
    const { pal, isEnglish } = req.body;

  if (!pal || typeof isEnglish !== "boolean") {
    return res.status(400).json({ error: "Invalid input" });
  }

    let data = mapKural(kurals);

    data = data.filter((value) => 
  isEnglish
    ? value.pal.english.includes(pal)
    : value.pal.tamil.includes(pal)
);

    res.json({count:data.length,data});
})

app.post("/api/kural_iyal",(req,res)=>{
    const { iyal, isEnglish } = req.body;

  if (!iyal || typeof isEnglish !== "boolean") {
    return res.status(400).json({ error: "Invalid input" });
  }

    let data = mapKural(kurals);

    data = data.filter((value) => 
  isEnglish
    ? value.iyal.english.includes(iyal)
    : value.iyal.tamil.includes(iyal)
);

    res.json({count:data.length,data});
})

app.listen(PORT,()=>{
    console.log(`✅ Thirukkural API running at http://localhost:${PORT}`);
})