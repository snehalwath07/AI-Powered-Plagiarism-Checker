function ReportAnalytics() {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "30px",
          fontSize: "40px",
        }}
      >
        Detailed Report Analytics
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {/* CARD 1 */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Exact Matches
          </h2>

          <h1 style={redText}>
            42%
          </h1>

          <div style={progressBar}>
            <div style={redProgress}></div>
          </div>

          <p style={descStyle}>
            Direct copied content identified in document.
          </p>
        </div>

        {/* CARD 2 */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Partial Matches
          </h2>

          <h1 style={yellowText}>
            28%
          </h1>

          <div style={progressBar}>
            <div style={yellowProgress}></div>
          </div>

          <p style={descStyle}>
            Semantic similarities detected successfully.
          </p>
        </div>

        {/* CARD 3 */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Citations
          </h2>

          <h1 style={blueText}>
            17
          </h1>

          <div style={progressBar}>
            <div style={blueProgress}></div>
          </div>

          <p style={descStyle}>
            Referenced academic sources detected.
          </p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  padding: "35px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const titleStyle = {
  color: "white",
  marginBottom: "20px",
};

const descStyle = {
  color: "#94a3b8",
  marginTop: "18px",
  lineHeight: "30px",
};

const progressBar = {
  width: "100%",
  height: "12px",
  background: "#1e293b",
  borderRadius: "10px",
  overflow: "hidden",
  marginTop: "18px",
};

const redProgress = {
  width: "42%",
  height: "100%",
  background: "#ef4444",
};

const yellowProgress = {
  width: "28%",
  height: "100%",
  background: "#facc15",
};

const blueProgress = {
  width: "80%",
  height: "100%",
  background: "#38bdf8",
};

const redText = {
  color: "#ef4444",
  fontSize: "55px",
};

const yellowText = {
  color: "#facc15",
  fontSize: "55px",
};

const blueText = {
  color: "#38bdf8",
  fontSize: "55px",
};

export default ReportAnalytics;