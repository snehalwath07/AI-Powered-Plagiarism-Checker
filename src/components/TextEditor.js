import { useState } from "react";
import axios from "axios";

function TextEditor({
  setResult,
  setLoading,
}) {

  const [activeTab, setActiveTab] =
    useState("file");

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [textContent, setTextContent] =
    useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCheck = async () => {

    try {

      setLoading(true);

      // TEXT MODE
      if (activeTab === "text") {

        if (!textContent.trim()) {

          alert(
            "Please enter some text"
          );

          setLoading(false);

          return;
        }

        const response =
          await axios.post(
            "http://127.0.0.1:5000/analyze-text",
            {
              text_content:
                textContent,
            }
          );

        setResult(response.data);

        setLoading(false);

        return;
      }

      // FILE MODE
      if (activeTab === "file") {

        if (!selectedFile) {

          alert(
            "Please select a file"
          );

          setLoading(false);

          return;
        }

        const formData =
          new FormData();

        formData.append(
          "file",
          selectedFile
        );

        const response =
          await axios.post(
            "http://127.0.0.1:5000/upload",
            formData
          );

        setResult(response.data);

        setLoading(false);

        return;
      }

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Analysis failed");
    }
  };

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.04)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "28px",
        padding: "32px",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "25px",
        }}
      >
        AI Powered Plagiarism Checker
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <button
          onClick={() =>
            setActiveTab("text")
          }
          style={
            activeTab === "text"
              ? activeTabStyle
              : tabStyle
          }
        >
          Text Input
        </button>

        <button
          onClick={() =>
            setActiveTab("file")
          }
          style={
            activeTab === "file"
              ? activeTabStyle
              : tabStyle
          }
        >
          File Upload
        </button>
      </div>

      {activeTab === "text" && (
        <textarea
          value={textContent}
          onChange={(e) =>
            setTextContent(
              e.target.value
            )
          }
          placeholder="Paste your content here..."
          style={{
            width: "100%",
            height: "320px",
            background: "#020617",
            color: "white",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "20px",
            resize: "none",
          }}
        />
      )}

      {activeTab === "file" && (
        <div
          style={{
            padding: "40px",
            border:
              "2px dashed rgba(56,189,248,0.4)",
            borderRadius: "24px",
            textAlign: "center",
          }}
        >
          <input
            type="file"
            onChange={
              handleFileChange
            }
          />

          {selectedFile && (
            <p
              style={{
                color: "#38bdf8",
                marginTop: "15px",
              }}
            >
              {selectedFile.name}
            </p>
          )}
        </div>
      )}

      <button
        onClick={handleCheck}
        style={{
          width: "100%",
          marginTop: "30px",
          padding: "18px",
          borderRadius: "18px",
          border: "none",
          background:
            "linear-gradient(90deg,#38bdf8,#7c3aed)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Check Plagiarism
      </button>
    </div>
  );
}

const tabStyle = {
  padding: "14px 24px",
  borderRadius: "16px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  background: "transparent",
  color: "#94a3b8",
  cursor: "pointer",
};

const activeTabStyle = {
  padding: "14px 24px",
  borderRadius: "16px",
  border: "none",
  background:
    "linear-gradient(90deg,#38bdf8,#7c3aed)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default TextEditor;