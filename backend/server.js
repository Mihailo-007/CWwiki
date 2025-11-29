import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/summary", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch("https://api.ollama.com/v1/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemma3:4b",
        prompt: `Стисло перекажи текст: ${text}`
      }),
    });

    const data = await response.json();

    res.json({ summary: data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log("Server running on port", port));
