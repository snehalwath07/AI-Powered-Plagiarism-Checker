function DocumentStats({ result }) {

  if (!result) return null;

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "30px",
          fontSize: "40px",
        }}
      >
        Document Statistics
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >

        <StatCard
          title="Words"
          value={result.word_count}
        />

        <StatCard
          title="Characters"
          value={result.character_count}
        />

        <StatCard
          title="Sentences"
          value={result.sentence_count}
        />

        <StatCard
          title="Paragraphs"
          value={result.paragraph_count}
        />

        <StatCard
          title="Reading Time"
          value={`${result.reading_time} min`}
        />

      </div>
    </div>
  );
}

function StatCard({ title, value }) {

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.04)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#38bdf8",
          fontSize: "42px",
          marginBottom: "15px",
        }}
      >
        {value}
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "18px",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default DocumentStats;