import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/summary", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemma-2-9b-it",
        messages: [
          {
            role: "user",
            content: `
Зроби НАДКOРОТКИЙ висновок українською.
Формат: тільки 1 речення, максимум 12–15 слів.
Не додавай деталей, імен чи фактів. Лише стисле резюме.

Текст:
${text}

Висновок:
`,
          },
        ],
      }),
    });

    const data = await response.json();
    const summary = data.choices?.[0]?.message?.content || "Помилка";

    res.json({ summary });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ error: error.toString() });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log("Server running on port", port));
