import SourceBreakdown from "./SourceBreakdown";
import DocumentPreview from "./DocumentPreview";

function AnalysisWorkspace() {
  return (
    <div
      style={{
        marginTop: "60px",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "35px",
          fontSize: "40px",
        }}
      >
        Detailed Similarity Analysis
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "30px",
        }}
      >
        {/* LEFT */}
        <SourceBreakdown />

        {/* RIGHT */}
        <DocumentPreview />
      </div>
    </div>
  );
}

export default AnalysisWorkspace;