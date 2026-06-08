function HeroSection() {

  const scrollToUpload = () => {
    document
      .getElementById("upload-section")
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
    <section
      style={{
        padding:
          "90px 60px 40px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#0f172a,#020617)",
          borderRadius: "35px",
          padding: "80px",
          border:
            "1px solid rgba(255,255,255,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background:
              "rgba(124,58,237,0.15)",
            borderRadius: "50%",
            filter: "blur(120px)",
            top: "-120px",
            right: "-120px",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
          }}
        >
          <p
            style={{
              color: "#38bdf8",
              fontWeight: "600",
              marginBottom: "20px",
              letterSpacing: "2px",
            }}
          >
            DOCUMENT ANALYSIS PLATFORM
          </p>

          <h1
            style={{
              fontSize: "78px",
              lineHeight: "90px",
              marginBottom: "30px",
              fontWeight: "800",
            }}
          >
            Detect
            <span
              style={{
                background:
                  "linear-gradient(90deg,#38bdf8,#7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:
                  "transparent",
              }}
            >
              {" "}
              Plagiarism{" "}
            </span>
            With Smart Analysis
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              lineHeight: "38px",
              marginBottom: "40px",
            }}
          >
            Upload documents and instantly
            analyze originality, writing
            quality, document structure and
            plagiarism patterns through an
            intelligent analysis dashboard.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              onClick={scrollToUpload}
              style={{
                padding: "18px 34px",
                borderRadius: "18px",
                border: "none",
                background:
                  "linear-gradient(90deg,#38bdf8,#7c3aed)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Start Checking
            </button>

            <button
              onClick={scrollToHowItWorks}
              style={{
                padding: "18px 34px",
                borderRadius: "18px",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Learn More
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",
              gap: "25px",
              marginTop: "70px",
            }}
          >
            <div style={featureCard}>
              <h3>Deep Analysis</h3>

              <p style={featureText}>
                Intelligent plagiarism and
                content similarity detection
              </p>
            </div>

            <div style={featureCard}>
              <h3>Writing Insights</h3>

              <p style={featureText}>
                Analyze readability and
                document quality
              </p>
            </div>

            <div style={featureCard}>
              <h3>Secure Processing</h3>

              <p style={featureText}>
                Your uploaded files remain
                private and secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const featureCard = {
  background: "rgba(255,255,255,0.04)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  padding: "28px",
  borderRadius: "24px",
};

const featureText = {
  color: "#94a3b8",
  marginTop: "10px",
  lineHeight: "28px",
};

export default HeroSection;