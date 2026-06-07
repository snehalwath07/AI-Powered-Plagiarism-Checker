import TextEditor from "./TextEditor";
import ScanSettings from "./ScanSettings";

function UploadSection({
  setResult,
  setLoading,
}) {
  return (
    <section
      id="upload-section"
      style={{
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* LEFT */}
        <TextEditor
          setResult={setResult}
          setLoading={setLoading}
        />

        {/* RIGHT */}
        <ScanSettings />
      </div>
    </section>
  );
}

export default UploadSection;