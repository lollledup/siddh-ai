export default function SymptomsPage() {
  return (
    <div style={{ padding: 30 }}>
      <h1>🩺 Symptom Checker (Practice Version)</h1>

      <input
        type="text"
        placeholder="What's bothering you?"
        style={{ padding: 10, marginTop: 20, width: '100%' }}
        onChange={() => {}}
      />

      <button
        style={{ marginTop: 20, padding: 10, backgroundColor: '#0070f3', color: 'white' }}
        onClick={() => alert("Hmm... I'm thinking. Maybe see a doctor? 😉")}
      >
        Check
      </button>
    </div>
  );
}
