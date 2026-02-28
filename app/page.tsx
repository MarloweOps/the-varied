import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
    <Nav />
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        padding: 'var(--page-margin)',
        maxWidth: 'var(--page-max)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* ── BODY ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '5rem',
        }}
      >
        {/* Orange accent line */}
        <div
          style={{
            width: '2.5rem',
            height: '3px',
            background: 'var(--accent-orange)',
            marginBottom: '1.5rem',
          }}
        />

        {/* Wordmark */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.75rem, 10vw, 7.5rem)',
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
          }}
        >
          The Varied
        </h1>

        {/* Descriptor */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            fontWeight: 300,
            color: 'var(--text-tertiary)',
            letterSpacing: '0.01em',
          }}
        >
          Creative agency and production company.
        </p>
      </div>

      {/* ── FOOTER ── */}
      <footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          fontWeight: 300,
          color: 'var(--text-muted)',
        }}
      >
        <span>Los Angeles</span>
        <a
          href="mailto:hello@thevaried.co"
          className="contact-link"
        >
          hello@thevaried.co
        </a>
      </footer>
    </main>
    </>
  );
}
