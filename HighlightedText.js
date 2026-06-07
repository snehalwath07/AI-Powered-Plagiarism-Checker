function HighlightedText() {
  return (
    <div
      className="feature-card"
      style={{
        marginTop: "50px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "28px",
        padding: "35px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#38bdf8",
          }}
        >
          Highlighted Similarities
        </h2>

        <button
          style={{
            padding: "12px 22px",
            borderRadius: "14px",
            border: "none",
            background: "#38bdf8",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Export Report
        </button>
      </div>

      <div
        style={{
          background: "#0f172a",
          borderRadius: "24px",
          padding: "35px",
          lineHeight: "45px",
          color: "#e2e8f0",
          fontSize: "18px",
        }}
      >
        <p>
          Artificial Intelligence technologies are transforming
          academic research and educational systems globally.
        </p>

        <p>
          <span style={redHighlight}>
            Machine learning algorithms are capable of identifying semantic similarities between documents and assignments.
          </span>
        </p>

        <p>
          Modern plagiarism detection systems rely heavily on natural
          language processing and contextual analysis.
        </p>

        <p>
          <span style={yellowHighlight}>
            Deep learning models improve text similarity detection accuracy significantly.
          </span>
        </p>

        <p>
          Educational institutions are increasingly adopting
          AI-powered verification systems.
        </p>

        <p>
          <span style={blueHighlight}>
            Semantic analysis enhances plagiarism identification compared to traditional keyword matching.
          </span>
        </p>
      </div>

      {/* LEGEND */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <div style={legendItem}>
          <div style={redDot}></div>
          High Match
        </div>

        <div style={legendItem}>
          <div style={yellowDot}></div>
          Partial Match
        </div>

        <div style={legendItem}>
          <div style={blueDot}></div>
          Semantic Match
        </div>
      </div>
    </div>
  );
}

const redHighlight = {
  background: "rgba(239,68,68,0.25)",
  border: "1px solid #ef4444",
  padding: "6px 10px",
  borderRadius: "10px",
};

const yellowHighlight = {
  background: "rgba(250,204,21,0.2)",
  border: "1px solid #facc15",
  padding: "6px 10px",
  borderRadius: "10px",
};

const blueHighlight = {
  background: "rgba(56,189,248,0.2)",
  border: "1px solid #38bdf8",
  padding: "6px 10px",
  borderRadius: "10px",
};

const legendItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#cbd5e1",
};

const baseDot = {
  width: "16px",
  height: "16px",
  borderRadius: "50%",
};

const redDot = {
  ...baseDot,
  background: "#ef4444",
};

const yellowDot = {
  ...baseDot,
  background: "#facc15",
};

const blueDot = {
  ...baseDot,
  background: "#38bdf8",
};

export default HighlightedText;