export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10vh 8vw 10vh',
        position: 'relative',
      }}
    >
      {/* THE VARIED — RX100, fills the room */}
      <h1
        style={{
          fontFamily: '"RX100", sans-serif',
          fontSize: 'clamp(80px, 21vw, 420px)',
          fontWeight: 400,
          lineHeight: 0.85,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          margin: 0,
          userSelect: 'none',
        }}
      >
        THE<br />VARIED
      </h1>

      {/* Tagline + cursor — quiet, beneath */}
      <p
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(18px, 2vw, 30px)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--text-muted)',
          lineHeight: 1,
          marginTop: '4vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Work. Ongoing.
        <span className="cursor-bar" />
      </p>

      {/* Branch links */}
      <nav
        style={{
          marginTop: '5vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
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
          position: 'absolute',
          bottom: '5vh',
          left: '8vw',
        }}
      >
        hello@thevaried.co
      </a>
    </main>
  )
}
