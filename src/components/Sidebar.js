function Sidebar() {
  return (
    <div
      className="feature-card"
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "rgba(255,255,255,0.04)",
        padding: "35px 25px",
        borderRadius: "30px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h1
        style={{
          color: "#38bdf8",
          marginBottom: "50px",
          fontSize: "32px",
        }}
      >
        AI Checker
      </h1>

      <div style={activeItem}>
        Dashboard
      </div>

      <div style={menuItem}>
        Plagiarism Reports
      </div>

      <div style={menuItem}>
        AI Detection
      </div>

      <div style={menuItem}>
        Grammar Analysis
      </div>

      <div style={menuItem}>
        Remove Plagiarism
      </div>

      <div style={menuItem}>
        Saved Files
      </div>

      <div style={menuItem}>
        Account Settings
      </div>
    </div>
  );
}

const menuItem = {
  padding: "18px",
  borderRadius: "18px",
  marginBottom: "18px",
  cursor: "pointer",
  background: "#0f172a",
  color: "#cbd5e1",
};

const activeItem = {
  ...menuItem,
  background: "linear-gradient(90deg,#38bdf8,#7c3aed)",
  color: "white",
  fontWeight: "bold",
};

export default Sidebar;