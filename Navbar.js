import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  const scrollToFeatures = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <nav
      style={{
        padding: "22px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom:
          "1px solid rgba(255,255,255,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "rgba(2,6,23,0.9)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg,#38bdf8,#7c3aed)",
            boxShadow:
              "0 0 30px rgba(124,58,237,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaShieldAlt
            color="white"
            size={20}
          />
        </div>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          AI Powered Plagiarism Checker
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
        <span
          style={navLink}
          onClick={scrollToFeatures}
        >
          Features
        </span>

        <span
          style={navLink}
          onClick={scrollToHowItWorks}
        >
          How It Works
        </span>
      </div>
    </nav>
  );
}

const navLink = {
  color: "#cbd5e1",
  cursor: "pointer",
  fontSize: "15px",
};

export default Navbar;