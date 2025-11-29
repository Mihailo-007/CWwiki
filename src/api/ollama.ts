export async function getBattleSummary(text: string) {
  try {
    const response = await fetch("https://cwwiki.onrender.com/summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (data.summary) {
      return data.summary.trim();
    } else {
      return "Помилка з'єднання з ШІ.";
    }
  } catch (err) {
    return "Помилка з'єднання з ШІ.";
  }
}
