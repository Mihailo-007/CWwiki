export async function getBattleSummary(text: string) {
  try {
    const response = await fetch("https://cwwiki.onrender.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemma3:4b",
        prompt: `Скороти текст:\n\n${text}`
      })
    });

    const reader = response.body!.getReader();
    let output = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = new TextDecoder().decode(value);

      try {
        const json = JSON.parse(chunk);
        if (json.response) output += json.response;
      } catch {}
    }

    return output.trim();
  } catch (err) {
    return "Помилка з'єднання з ШІ.";
  }
}
