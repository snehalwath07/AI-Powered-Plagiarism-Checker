function AIDetector({ result }) {

  if (!result) return null;

  const text = result.text_content || "";

  const words =
    text.toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

  const totalWords = words.length;

  const uniqueWords =
    new Set(words).size;

  const wordVariety =
    totalWords > 0
      ? Math.round(
          (uniqueWords / totalWords) * 100
        )
      : 0;

  const sentences =
    text.split(/[.!?]+/)
      .filter(s => s.trim());

  const avgSentenceLength =
    sentences.length > 0
      ? totalWords / sentences.length
      : 0;

  let readability = 100;

  if (avgSentenceLength > 25)
    readability = 55;
  else if (avgSentenceLength > 18)
    readability = 75;
  else
    readability = 90;

  const repeatedWords =
    Math.max(
      0,
      Math.round(100 - wordVariety)
    );

  const contentQuality =
    Math.round(
      (wordVariety + readability) / 2
    );

  let assessment =
    "Likely Human Written";

  let confidence = "High";

  if (
    repeatedWords > 45 &&
    readability < 70
  ) {
    assessment =
      "AI-Assisted Writing Detected";

    confidence = "Moderate";
  }

  return (
    <div
      className="feature-card"
      style={{
        marginTop: "50px",
        background:
          "rgba(255,255,255,0.04)",
        borderRadius: "28px",
        padding: "35px",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "30px",
        }}
      >
        Writing Pattern Analysis
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <MetricCard
          title="Writing Style"
          value={`${wordVariety}%`}
          color="#38bdf8"
        />

        <MetricCard
          title="Content Quality"
          value={`${contentQuality}%`}
          color="#22c55e"
        />

        <MetricCard
          title="Readability"
          value={`${readability}%`}
          color="#facc15"
        />

        <MetricCard
          title="Repeated Words"
          value={`${repeatedWords}%`}
          color="#ef4444"
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h3
          style={{
            color: "#38bdf8",
            marginBottom: "15px",
          }}
        >
          Overall Assessment
        </h3>

        <h2
          style={{
            color: "#22c55e",
            marginBottom: "10px",
          }}
        >
          {assessment}
        </h2>

        <p
          style={{
            color: "#cbd5e1",
          }}
        >
          Confidence: {confidence}
        </p>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  color,
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "25px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color,
          fontSize: "48px",
        }}
      >
        {value}
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "10px",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default AIDetector;