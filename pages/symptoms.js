import { useState } from "react";

export default function Symptoms() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated AI response
    const answer = input.toLowerCase().includes("throat")
      ? "This might be pharyngitis. Stay hydrated and consider seeing a doctor if symptoms persist."
      : "Thank you for your input. More data would help me assist you better.";
    setResponse(answer);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🧠 Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your symptom..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: 10,
            width: "80%",
            marginTop: 20,
            marginBottom: 10,
            fontSize: 16,
          }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px", fontSize: 16 }}>
          Analyze
        </button>
      </form>

      {response && (
        <div style={{ marginTop: 20, background: "#f0f0f0", padding: 15 }}>
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
