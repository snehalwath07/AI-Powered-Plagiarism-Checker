function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "80px 60px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "52px",
          marginBottom: "20px",
        }}
      >
        How It Works
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "18px",
          marginBottom: "50px",
        }}
      >
        Follow these 3 simple steps to analyze your document.
      </p>

      <div
        style={{
          background:
            "rgba(255,255,255,0.04)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          borderRadius: "30px",
          padding: "30px",
        }}
      >
        <img
          src="/how-it-works.png"
          alt="How It Works"
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
    </section>
  );
}

export default HowItWorks;