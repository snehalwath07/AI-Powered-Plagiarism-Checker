function ProcessingLoader() {

  return (
    <div
      style={{
        padding: "60px",
      }}
    >
      <div
        style={{
          background:
            "rgba(255,255,255,0.04)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          borderRadius: "34px",
          padding: "60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* GLOW */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "rgba(124,58,237,0.15)",
            borderRadius: "50%",
            filter: "blur(120px)",
            top: "-100px",
            right: "-100px",
          }}
        ></div>

        {/* AI RING */}
        <div
          style={{
            width: "220px",
            height: "220px",
            margin: "auto",
            borderRadius: "50%",
            background:
              "conic-gradient(#38bdf8 0% 75%, #7c3aed 75% 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation:
              "spin 3s linear infinite",
            marginBottom: "40px",
            boxShadow:
              "0 0 50px rgba(124,58,237,0.4)",
          }}
        >
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              background: "#020617",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              fontWeight: "bold",
            }}
          >
            AI
          </div>
        </div>

        {/* TEXT */}
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Analyzing Your Content
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            lineHeight: "34px",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Running semantic analysis, AI
          detection, plagiarism scanning,
          grammar verification, and contextual
          similarity matching.
        </p>

        {/* STEPS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4,1fr)",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <div style={stepCard}>
            Semantic Scan
          </div>

          <div style={stepCard}>
            AI Detection
          </div>

          <div style={stepCard}>
            Source Matching
          </div>

          <div style={stepCard}>
            Generating Report
          </div>
        </div>
      </div>
    </div>
  );
}

const stepCard = {
  background:
    "rgba(255,255,255,0.04)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  padding: "22px",
  borderRadius: "20px",
  color: "#cbd5e1",
};

export default ProcessingLoader;