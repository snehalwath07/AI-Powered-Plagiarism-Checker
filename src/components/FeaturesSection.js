function FeatureSection({
  activeTab,
  setActiveTab,
}) {

return (
  <div
    id="features"
    style={{
      padding: "0 60px",
      marginTop: "50px",
    }}
  >
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() =>
            setActiveTab("plagiarism")
          }
          style={
            activeTab === "plagiarism"
              ? activeStyle
              : normalStyle
          }
        >
          Plagiarism Checker
        </button>

        <button
          onClick={() =>
            setActiveTab("grammar")
          }
          style={
            activeTab === "grammar"
              ? activeStyle
              : normalStyle
          }
        >
          Writing Analysis
        </button>

        <button
          onClick={() =>
            setActiveTab("ai")
          }
          style={
            activeTab === "ai"
              ? activeStyle
              : normalStyle
          }
        >
          AI Content Analysis
        </button>

        <button
          onClick={() =>
            setActiveTab("remove")
          }
          style={
            activeTab === "remove"
              ? activeStyle
              : normalStyle
          }
        >
          Research Paper Analysis
        </button>
      </div>
    </div>
  );
}

const normalStyle = {
  padding: "16px 28px",
  borderRadius: "18px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  background:
    "rgba(255,255,255,0.04)",
  color: "white",
  cursor: "pointer",
  fontSize: "15px",
};

const activeStyle = {
  padding: "16px 28px",
  borderRadius: "18px",
  border: "none",
  background:
    "linear-gradient(90deg,#38bdf8,#7c3aed)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "15px",
};

export default FeatureSection;