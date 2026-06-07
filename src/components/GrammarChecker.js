function GrammarChecker({ result }) {

  if (!result) return null;

  const text =
    result.text_content || "";

  const wordCount =
    text.trim().split(/\s+/).filter(Boolean)
      .length;

  const sentenceCount =
    text.split(/[.!?]+/)
      .filter(sentence => sentence.trim())
      .length;

  const avgWords =
    sentenceCount > 0
      ? Math.round(wordCount / sentenceCount)
      : 0;

  return (
    <div
      style={{
        marginTop: "50px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "30px",
        padding: "35px",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "35px",
          fontSize: "38px",
        }}
      >
        Writing Analysis
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        <div style={cardStyle}>
          <h1 style={blueText}>
            {wordCount}
          </h1>

          <p style={descStyle}>
            Total Words
          </p>
        </div>

        <div style={cardStyle}>
          <h1 style={greenText}>
            {sentenceCount}
          </h1>

          <p style={descStyle}>
            Total Sentences
          </p>
        </div>

        <div style={cardStyle}>
          <h1 style={yellowText}>
            {avgWords}
          </h1>

          <p style={descStyle}>
            Avg Words / Sentence
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h3
          style={{
            color: "#38bdf8",
            marginBottom: "15px",
          }}
        >
          Writing Suggestions
        </h3>

        <ul
          style={{
            color: "#cbd5e1",
            lineHeight: "34px",
          }}
        >
          <li>
            Use shorter sentences for better readability.
          </li>

          <li>
            Avoid repetitive wording.
          </li>

          <li>
            Add citations where needed.
          </li>

          <li>
            Improve paragraph structure for clarity.
          </li>
        </ul>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#0f172a",
  padding: "35px",
  borderRadius: "24px",
  textAlign: "center",
};

const descStyle = {
  color: "#94a3b8",
  marginTop: "15px",
};

const blueText = {
  color: "#38bdf8",
  fontSize: "55px",
};

const greenText = {
  color: "#22c55e",
  fontSize: "55px",
};

const yellowText = {
  color: "#facc15",
  fontSize: "55px",
};

export default GrammarChecker;