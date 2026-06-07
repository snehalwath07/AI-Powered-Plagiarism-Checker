function AnalyticsCards({ result }) {

  if (!result) return null;

  const plagiarism =
    result.plagiarism_score || 0;

  const ai =
    result.ai_score || 0;

  const originality =
    result.originality_score || 0;

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "35px",
          fontSize: "40px",
        }}
      >
        AI Analysis Overview
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >

        {/* PLAGIARISM */}
        <div style={cardStyle}>
          <div
            style={{
              ...circleBase,
              background:
                `conic-gradient(#ef4444 0% ${plagiarism}%,
                #1e293b ${plagiarism}% 100%)`
            }}
          >
            <h1>{plagiarism}%</h1>
          </div>

          <h2 style={titleStyle}>
            Plagiarism Score
          </h2>
        </div>

        {/* AI */}
        <div style={cardStyle}>
          <div
            style={{
              ...circleBase,
              background:
                `conic-gradient(#facc15 0% ${ai}%,
                #1e293b ${ai}% 100%)`
            }}
          >
            <h1>{ai}%</h1>
          </div>

          <h2 style={titleStyle}>
            AI Generated
          </h2>
        </div>

        {/* ORIGINALITY */}
        <div style={cardStyle}>
          <div
            style={{
              ...circleBase,
              background:
                `conic-gradient(#38bdf8 0% ${originality}%,
                #1e293b ${originality}% 100%)`
            }}
          >
            <h1>{originality}%</h1>
          </div>

          <h2 style={titleStyle}>
            Originality
          </h2>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  background:
    "rgba(255,255,255,0.04)",
  borderRadius: "30px",
  padding: "35px",
  textAlign: "center",
  border:
    "1px solid rgba(255,255,255,0.08)",
};

const titleStyle = {
  marginTop: "30px",
  color: "white",
};

const circleBase = {
  width: "170px",
  height: "170px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
};

export default AnalyticsCards;