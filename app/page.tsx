export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 8vw",
        position: "relative",
      }}
    >
      {/* Wordmark — quiet label, not a hero */}
      <p
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: "clamp(11px, 0.9vw, 13px)",
          fontWeight: 300,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text-dim)",
          marginBottom: "3vh",
        }}
      >
        The Varied
      </p>

      {/* Main line + blinking cursor */}
      <p
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: "clamp(40px, 5.5vw, 80px)",
          fontStyle: "italic",
          fontWeight: 300,
          lineHeight: 1,
          color: "var(--text-primary)",
          display: "flex",
          alignItems: "center",
        }}
      >
        Work. Ongoing.
        <span className="cursor-bar" />
      </p>

      {/* Branch links */}
      <nav
        style={{
          marginTop: "7vh",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <a
          className="varied-link"
          href="https://acid.thevaried.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acid Media
        </a>
        <a
          className="varied-link"
          href="https://useopa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          OPA
        </a>
      </nav>

      {/* Contact — anchored bottom-left */}
      <a
        className="varied-link"
        href="mailto:hello@thevaried.co"
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "8vw",
        }}
      >
        hello@thevaried.co
      </a>
    </main>
  );
}
