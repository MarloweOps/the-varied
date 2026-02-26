export default function Home() {
  return (
    <main
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
      }}
    >
      {/* THE — top-left */}
      <span
        style={{
          fontFamily: '"RX100", sans-serif',
          fontSize: 'clamp(80px, 22vw, 480px)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          position: 'absolute',
          top: '6vh',
          left: '6vw',
          userSelect: 'none',
        }}
      >
        THE
      </span>

      {/* VARIED + cursor — bottom-left */}
      <span
        style={{
          fontFamily: '"RX100", sans-serif',
          fontSize: 'clamp(80px, 22vw, 480px)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          position: 'absolute',
          bottom: '6vh',
          left: '6vw',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        VARIED
        <span
          className="cursor-bar"
          style={{ height: '0.65em', width: '3px', marginLeft: '0.06em' }}
        />
      </span>

      {/* Branch links — top-right */}
      <nav
        style={{
          position: 'absolute',
          top: '6vh',
          right: '6vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
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

      {/* Contact — bottom-right */}
      <a
        className="varied-link"
        href="mailto:hello@thevaried.co"
        style={{
          position: 'absolute',
          bottom: '6vh',
          right: '6vw',
        }}
      >
        hello@thevaried.co
      </a>
    </main>
  )
}
