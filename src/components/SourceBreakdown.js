function SourceBreakdown() {

  const sources = [
    {
      website: "Wikipedia",
      match: "82%",
    },

    {
      website: "ResearchGate",
      match: "64%",
    },

    {
      website: "Medium",
      match: "48%",
    },

    {
      website: "Academia.edu",
      match: "37%",
    },
  ];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "28px",
        padding: "30px",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          fontSize: "28px",
        }}
      >
        Source Breakdown
      </h2>

      {sources.map((source, index) => (
        <div
          key={index}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <h3>{source.website}</h3>

            <span
              style={{
                color: "#ef4444",
                fontWeight: "bold",
              }}
            >
              {source.match}
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#1e293b",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: source.match,
                height: "100%",
                background:
                  "linear-gradient(90deg,#ef4444,#f97316)",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SourceBreakdown;