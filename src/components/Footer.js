function Footer() {
  return (
    <footer
      style={{
        padding: "40px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "15px",
        }}
      >
        AI Plagiarism Checker
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "20px",
        }}
      >
        Advanced AI powered assignment plagiarism detection platform using
        NLP and Machine Learning.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <span style={{ color: "#cbd5e1", cursor: "pointer" }}>Home</span>
        <span style={{ color: "#cbd5e1", cursor: "pointer" }}>Features</span>
        <span style={{ color: "#cbd5e1", cursor: "pointer" }}>Upload</span>
        <span style={{ color: "#cbd5e1", cursor: "pointer" }}>Reports</span>
      </div>

      <p
        style={{
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        © 2026 AI Plagiarism Checker. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;