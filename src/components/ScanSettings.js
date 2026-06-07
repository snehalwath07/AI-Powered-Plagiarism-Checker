function ScanSettings() {

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.04)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "28px",
        padding: "30px",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          marginBottom: "35px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "12px",
          }}
        >
          Scan Settings
        </h2>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "28px",
          }}
        >
          Configure advanced AI analysis
          and plagiarism detection modes.
        </p>
      </div>

      {/* SETTINGS */}
      <div style={settingCard}>
        <div>
          <h3>Deep Search</h3>

          <p style={settingText}>
            Advanced semantic similarity scan
          </p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>

      <div style={settingCard}>
        <div>
          <h3>AI Detection</h3>

          <p style={settingText}>
            Detect AI generated content
          </p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>

      <div style={settingCard}>
        <div>
          <h3>Academic Mode</h3>

          <p style={settingText}>
            Optimized for academic documents
          </p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>

      <div style={settingCard}>
        <div>
          <h3>Internet Search</h3>

          <p style={settingText}>
            Compare against online sources
          </p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>

      <div style={settingCard}>
        <div>
          <h3>Grammar Analysis</h3>

          <p style={settingText}>
            Check grammar and writing style
          </p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>

      {/* AI STATUS */}
      <div
        style={{
          marginTop: "35px",
          background:
            "linear-gradient(135deg,#38bdf8,#7c3aed)",
          padding: "24px",
          borderRadius: "24px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            marginBottom: "10px",
            opacity: 0.8,
          }}
        >
          AI ENGINE STATUS
        </p>

        <h2
          style={{
            marginBottom: "10px",
          }}
        >
          Ready For Analysis
        </h2>

        <p
          style={{
            lineHeight: "28px",
            opacity: 0.9,
          }}
        >
          Semantic NLP engine initialized
          successfully.
        </p>
      </div>
    </div>
  );
}

const settingCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 0",
  borderBottom:
    "1px solid rgba(255,255,255,0.06)",
};

const settingText = {
  color: "#94a3b8",
  marginTop: "6px",
  fontSize: "14px",
};

export default ScanSettings;