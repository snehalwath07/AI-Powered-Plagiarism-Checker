function ResultsSection({
  result,
  setShowReport,
}) {

  if (!result) return null;

  const plagiarism =
    result.plagiarism_score || 0;

  const originality =
    result.originality_score || 0;

  const ai =
    result.ai_score || 0;

  const grammar =
    result.grammar_score || 0;

  const createCircle = (
    percent,
    color
  ) => ({
    ...baseCircle,
    background:
      `conic-gradient(${color} 0% ${percent}%,
      #1e293b ${percent}% 100%)`,
  });

  return (
    <section
      style={{
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
          }}
        >
          Analysis Results
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "25px",
        }}
      >

        <div style={cardStyle}>
          <div
            style={createCircle(
              plagiarism,
              "#ef4444"
            )}
          >
            {plagiarism}%
          </div>

          <h3 style={title}>
            Plagiarism
          </h3>

          <p style={desc}>
            Similarity detected
          </p>
        </div>

        <div style={cardStyle}>
          <div
            style={createCircle(
              originality,
              "#38bdf8"
            )}
          >
            {originality}%
          </div>

          <h3 style={title}>
            Originality
          </h3>

          <p style={desc}>
            Unique content score
          </p>
        </div>

        <div style={cardStyle}>
          <div
            style={createCircle(
              ai,
              "#7c3aed"
            )}
          >
            {ai}%
          </div>

          <h3 style={title}>
            AI Probability
          </h3>

          <p style={desc}>
            AI generated estimation
          </p>
        </div>

        <div style={cardStyle}>
          <div
            style={createCircle(
              grammar,
              "#22c55e"
            )}
          >
            {grammar}%
          </div>

          <h3 style={title}>
            Grammar Score
          </h3>

          <p style={desc}>
            Writing quality analysis
          </p>
        </div>

      </div>

      <button
        onClick={() =>
          setShowReport(true)
        }
        style={{
          marginTop: "40px",
          width: "100%",
          padding: "22px",
          borderRadius: "22px",
          border: "none",
          background:
            "linear-gradient(90deg,#38bdf8,#7c3aed)",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Generate Full AI Report
      </button>
    </section>
  );
}

const cardStyle = {
  background:
    "rgba(255,255,255,0.04)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "35px",
  textAlign: "center",
};

const baseCircle = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  margin: "auto",
  marginBottom: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  fontWeight: "bold",
};

const title = {
  fontSize: "22px",
  marginBottom: "10px",
};

const desc = {
  color: "#94a3b8",
};

export default ResultsSection;