import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import ToolTabs from "./ToolTabs";
import TextEditor from "./TextEditor";
import ScanSettings from "./ScanSettings";
import AnalyticsCards from "./AnalyticsCards";
import ProcessingLoader from "./ProcessingLoader";
import AnalysisWorkspace from "./AnalysisWorkspace";
import ReportAnalytics from "./ReportAnalytics";
import HighlightedText from "./HighlightedText";
import GrammarChecker from "./GrammarChecker";
import AIDetector from "./AIDetector";
import RemovePlagiarism from "./RemovePlagiarism";

function WorkspaceLayout() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        marginTop: "60px",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div
        style={{
          flex: 1,
          paddingRight: "40px",
        }}
      >
        <TopNavbar />

        <ToolTabs />

        <TextEditor />

        <ScanSettings />

       <AnalyticsCards result={result} />

        <ProcessingLoader />

        <AnalysisWorkspace />

        <ReportAnalytics />

        <HighlightedText />

        <GrammarChecker />

        <AIDetector />

        <RemovePlagiarism />
      </div>
    </div>
  );
}

export default WorkspaceLayout;