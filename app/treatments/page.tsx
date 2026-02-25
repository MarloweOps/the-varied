import Nav from "@/components/Nav";

export default function TreatmentsPage() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-[1280px] px-10 md:px-16">
        <section className="pb-20 pt-40">
          <p className="section-label">TREATMENTS</p>
          <h1 className="font-cormorant text-[64px] leading-none text-[var(--text-primary)]">
            Director Treatments
          </h1>
          <p className="mt-8 max-w-[620px] font-inter text-[15px] leading-[1.9] text-[var(--text-muted)]">
            Director treatments available for licensing and bespoke production.
          </p>
        </section>

        <section className="pb-40">
          <a
            href="#"
            className="group block border border-[var(--border)] bg-[var(--bg-surface)] p-12 transition-all duration-200 hover:border-[var(--accent)]"
          >
            <p className="font-cormorant text-4xl leading-none text-[var(--text-primary)]">
              Blow Away
            </p>
            <p className="mt-3 font-inter text-sm tracking-wide text-[var(--text-muted)]">
              Music Video Treatment
            </p>
            <p className="mt-8 font-inter text-sm text-[var(--accent)] transition-colors group-hover:text-[var(--accent-hover)]">
              View →
            </p>
          </a>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-[var(--border)] px-10 py-10 md:px-16">
        <p className="font-inter text-xs tracking-[0.25em] text-[var(--text-dim)]">
          THE VARIED
        </p>
        <p className="font-inter text-xs text-[var(--text-dim)]">
          © 2026 The Varied
        </p>
      </footer>
    </>
  );
}
