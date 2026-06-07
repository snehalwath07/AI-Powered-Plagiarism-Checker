function StatsSection() {
  const stats = [
    ["10K+", "Assignments Checked"],
    ["98%", "Detection Accuracy"],
    ["24/7", "AI Monitoring"],
    ["500+", "Institutions Supported"],
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px 100px 100px 100px",
      }}
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="feature-card"
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "35px",
            borderRadius: "20px",
            width: "250px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h1
            style={{
              color: "#38bdf8",
              fontSize: "42px",
              marginBottom: "15px",
            }}
          >
            {item[0]}
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >
            {item[1]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;