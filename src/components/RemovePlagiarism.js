function RemovePlagiarism({ result }) {

  if (!result) return null;

  const text =
    (result.text_content || "").toLowerCase();

  const titleFound =
    text.length > 20;

  const introductionFound =
    text.includes("introduction");

  const methodologyFound =
    text.includes("methodology") ||
    text.includes("methods");

  const resultsFound =
    text.includes("results") ||
    text.includes("discussion") ||
    text.includes("results and discussion");

  const conclusionFound =
    text.includes("conclusion");

  const referencesFound =
    text.includes("references") ||
    text.includes("bibliography");

  let completeness = 0;

  if (titleFound) completeness += 15;
  if (introductionFound) completeness += 15;
  if (methodologyFound) completeness += 20;
  if (resultsFound) completeness += 20;
  if (conclusionFound) completeness += 15;
  if (referencesFound) completeness += 15;

  const credibility =
    Math.min(100, completeness + 10);

  let academicTone = "Moderate";

  if (
    text.includes("research") ||
    text.includes("analysis") ||
    text.includes("study")
  ) {
    academicTone = "Strong";
  }

  let structureQuality = "Average";

  if (completeness >= 75) {
    structureQuality = "Good";
  }

  if (completeness === 100) {
    structureQuality = "Excellent";
  }

  return (
    <div
      style={{
        marginTop: "50px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "30px",
        padding: "35px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "35px",
          fontSize: "38px",
        }}
      >
        Research Analysis
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Title"
          value={
            titleFound
              ? "✓ Found"
              : "✗ Missing"
          }
        />

        <Card
          title="Introduction"
          value={
            introductionFound
              ? "✓ Found"
              : "✗ Missing"
          }
        />

        <Card
          title="Methodology"
          value={
            methodologyFound
              ? "✓ Found"
              : "✗ Missing"
          }
        />

        <Card
          title="Results & Discussion"
          value={
            resultsFound
              ? "✓ Found"
              : "✗ Missing"
          }
        />

        <Card
          title="Conclusion"
          value={
            conclusionFound
              ? "✓ Found"
              : "✗ Missing"
          }
        />

        <Card
          title="References"
          value={
            referencesFound
              ? "✓ Found"
              : "✗ Missing"
          }
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
        <h2
          style={{
            color: "#38bdf8",
          }}
        >
          Research Strength
        </h2>

        <h1
          style={{
            color: "#22c55e",
            marginTop: "15px",
          }}
        >
          {completeness}%
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Research Completeness
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            color: "#38bdf8",
          }}
        >
          Credibility Assessment
        </h2>

        <h1
          style={{
            color: "#facc15",
            marginTop: "15px",
          }}
        >
          {credibility}%
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginTop: "10px",
          }}
        >
          Academic Tone: {academicTone}
        </p>

        <p
          style={{
            color: "#cbd5e1",
          }}
        >
          Structure Quality: {structureQuality}
        </p>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "25px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "white",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#38bdf8",
          marginTop: "15px",
          fontSize: "20px",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default RemovePlagiarism;