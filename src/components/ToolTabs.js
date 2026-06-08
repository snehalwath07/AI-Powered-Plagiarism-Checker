import { useState } from "react";

function ToolTabs() {

  const [activeTab, setActiveTab] = useState("Plagiarism Checker");

  const tabs = [
    "Plagiarism Checker",
    "Remove Plagiarism",
    "Check Grammar",
    "AI Detector",
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "18px",
        marginBottom: "40px",
        flexWrap: "wrap",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            padding: "16px 28px",
            borderRadius: "18px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "0.3s",
            background:
              activeTab === tab
                ? "linear-gradient(90deg,#38bdf8,#7c3aed)"
                : "rgba(255,255,255,0.04)",
            color: "white",
          }}
        >
          {tab}
        </button>
      ))}

      <button
        style={{
          marginLeft: "auto",
          padding: "16px 28px",
          borderRadius: "18px",
          border: "none",
          background: "#facc15",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Upgrade Pro
      </button>
    </div>
  );
}

export default ToolTabs;