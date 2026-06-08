function TopNavbar() {
  return (
    <div
      className="feature-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 35px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.08)",
        marginBottom: "40px",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {/* LEFT */}
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "38px",
          }}
        >
          AI Powered Plagiarism Checker
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px",
            lineHeight: "30px",
          }}
        >
          Real-time plagiarism detection, AI analysis,
          grammar checking, and semantic verification platform.
        </p>
      </div>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
        }}
      >
        <button style={proButton}>
          Upgrade Pro
        </button>

        <div style={profileCircle}>
          SB
        </div>
      </div>
    </div>
  );
}

const proButton = {
  padding: "15px 28px",
  borderRadius: "18px",
  border: "none",
  background: "linear-gradient(90deg,#38bdf8,#7c3aed)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const profileCircle = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: "#38bdf8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px",
};

export default TopNavbar;