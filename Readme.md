
---

# **Thirukkural API Documentation**

**Base URL:** `http://localhost:3000`

---

## **1. Welcome Route**

**Endpoint:** `/`
**Method:** `GET`
**Description:** Returns a welcome message to indicate the API is running.

**Request:** None

**Response Example:**

```json
"Welcome to thirukkural api"
```

---

## **2. Get All Kurals**

**Endpoint:** `/api/kurals`
**Method:** `POST`
**Description:** Returns all Thirukkural entries from the JSON file.

**Request Body:** None required.

**Response Example:**

```json
{
  "count": 1330,
  "data": [
    {
      "number": 1,
      "adhiharam": {
        "tamil": "கடவுள் சார்பானது...",
        "english": "On God"
      },
      "kural": {
        "tamil": ["அகர முதல எழுத்தெல்லாம்..."],
        "english": ["A begins all letters..."]
      },
      "pal": {
        "tamil": "குறள் பொருள்",
        "english": "Kural meaning"
      },
      "iyal": {
        "tamil": "பொருள் வகை",
        "english": "Classification"
      },
      "meaning": {
        "tamil": "குறளின் விளக்கம்",
        "english": "Explanation of kural"
      }
    },
    ...
  ]
}
```

---

## **3. Get Single Kural by Number**

**Endpoint:** `/api/kural_single`
**Method:** `POST`
**Description:** Returns a single Kural based on its number.

**Request Body:**

```json
{
  "num": 1
}
```

**Response Example:**

```json
{
  "count": 1,
  "data": {
    "number": 1,
    "adhiharam": { "tamil": "...", "english": "..." },
    "kural": { "tamil": ["..."], "english": ["..."] },
    "pal": { "tamil": "...", "english": "..." },
    "iyal": { "tamil": "...", "english": "..." },
    "meaning": { "tamil": "...", "english": "..." }
  }
}
```

**Notes:**

* `num` should be an integer between 1 and 1330.
* Returns 404 or empty if the Kural number does not exist.

---

## **4. Get Kurals by Adhiharam (Chapter)**

**Endpoint:** `/api/kural_adhiharam`
**Method:** `POST`
**Description:** Returns Kurals filtered by chapter (adhiharam) in Tamil or English.

**Request Body:**

```json
{
  "adhiharam": "கடவுள் சார்பானது",
  "isEnglish": false
}
```

**Request Parameters:**

* `adhiharam` (string) — Chapter name to search.
* `isEnglish` (boolean) — `true` to search in English, `false` for Tamil.

**Response Example:**

```json
{
  "count": 10,
  "data": [
    {
      "number": 1,
      "adhiharam": { "tamil": "...", "english": "..." },
      "kural": { "tamil": ["..."], "english": ["..."] },
      "pal": { "tamil": "...", "english": "..." },
      "iyal": { "tamil": "...", "english": "..." },
      "meaning": { "tamil": "...", "english": "..." }
    },
    ...
  ]
}
```

---

## **5. Get Kurals by Pal (Meaning)**

**Endpoint:** `/api/kural_pal`
**Method:** `POST`
**Description:** Returns Kurals filtered by `pal` (meaning) in Tamil or English.

**Request Body:**

```json
{
  "pal": "குறள் பொருள்",
  "isEnglish": false
}
```

**Response Example:**
Similar to `/api/kural_adhiharam`.

---

## **6. Get Kurals by Iyal (Category/Classification)**

**Endpoint:** `/api/kural_iyal`
**Method:** `POST`
**Description:** Returns Kurals filtered by `iyal` (classification) in Tamil or English.

**Request Body:**

```json
{
  "iyal": "பொருள் வகை",
  "isEnglish": false
}
```

**Response Example:**
Similar to `/api/kural_adhiharam`.

---

