import Nav from "@/components/Nav";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div style={{ minHeight: "calc(100dvh - 120px)", paddingTop: "100px" }}>
        {children}
      </div>

      {/* Footer */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          maxWidth: "var(--page-max)",
          margin: "0 auto",
          padding: "2rem var(--page-margin)",
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          fontWeight: 300,
          color: "var(--text-muted)",
        }}
      >
        <span>&copy; {new Date().getFullYear()} The Varied</span>
        <a
          href="mailto:hello@thevaried.co"
          className="contact-link"
        >
          hello@thevaried.co
        </a>
      </footer>
    </>
  );
}
