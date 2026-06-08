function DocumentPreview({ result }) {

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.04)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "28px",
        padding: "30px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          Uploaded Assignment Preview
        </h2>

        <div
          style={{
            background:
              "linear-gradient(90deg,#38bdf8,#7c3aed)",
            padding: "10px 18px",
            borderRadius: "14px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Real Document Content
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          background: "#020617",
          borderRadius: "24px",
          padding: "35px",
          lineHeight: "38px",
          color: "#e2e8f0",
          fontSize: "16px",
          minHeight: "500px",
          whiteSpace: "pre-wrap",
          overflowY: "auto",
        }}
      >
        {result?.text_content
          ? result.text_content
          : "No document preview available"}
      </div>
    </div>
  );
}

export default DocumentPreview;