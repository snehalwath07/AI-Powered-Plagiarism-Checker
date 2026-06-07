import DocumentStats from "./components/DocumentStats";
import { useState } from "react";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UploadSection from "./components/UploadSection";
import ProcessingLoader from "./components/ProcessingLoader";
import ResultsSection from "./components/ResultsSection";
import FeatureSection from "./components/FeaturesSection";

import GrammarChecker from "./components/GrammarChecker";
import AIDetector from "./components/AIDetector";
import RemovePlagiarism from "./components/RemovePlagiarism";

import DocumentPreview from "./components/DocumentPreview";

import DetailedReport from "./components/DetailedReport";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [showReport, setShowReport] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState("plagiarism");

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827)",
        minHeight: "100vh",
        color: "white",
        fontFamily:
          "'Poppins', sans-serif",
      }}
    >
      <Navbar />

      <HeroSection />

      <UploadSection
        setResult={setResult}
        setLoading={setLoading}
      />

      {loading && (
        <ProcessingLoader />
      )}

      {result && !loading && (
        <>
          <ResultsSection
            result={result}
            setShowReport={setShowReport}
          />

          <FeatureSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div
            style={{
              padding: "40px 60px",
            }}
          >
            {activeTab ===
              "plagiarism" && (
              <>
                <DocumentStats
                  result={result}
                />
                <DocumentPreview
                  result={result}
                />
              </>
            )}

            {activeTab ===
              "grammar" && (
              <GrammarChecker
                result={result}
              />
            )}

            {activeTab === "ai" && (
              <AIDetector
                result={result}
              />
            )}

            {activeTab ===
              "remove" && (
              <RemovePlagiarism
                result={result}
              />
            )}
          </div>
        </>
      )}

      <DetailedReport
        showReport={showReport}
        setShowReport={setShowReport}
        result={result}
      />

      <HowItWorks />

      <Footer />
    </div>
  );
}

export default App;