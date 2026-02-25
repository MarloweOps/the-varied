import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import HeroIntro from "@/components/HeroIntro";

const projects = [
  {
    client: "BTS",
    project: "Permission To Dance",
    type: "Music Video",
    year: "2021",
  },
  {
    client: "Netflix",
    project: "Farewell to DVDs",
    type: "Commercial",
    year: "2023",
  },
  {
    client: "Toyota",
    project: "We Roll Deep",
    type: "Commercial",
    year: "2022",
  },
  {
    client: "Notion",
    project: "For Your Life's Work",
    type: "Commercial",
    year: "2024",
  },
  {
    client: "Atlassian",
    project: "High Velocity",
    type: "Commercial",
    year: "2023",
  },
  {
    client: "Sonos",
    project: "Move 2",
    type: "Commercial",
    year: "2023",
  },
  {
    client: "Pizza Hut",
    project: "Anderson .Paak",
    type: "Music Video",
    year: "2022",
  },
  {
    client: "UberEats",
    project: "Burger King",
    type: "Commercial",
    year: "2021",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <HeroIntro />

        <section id="work" className="mx-auto max-w-[1280px] px-10 py-40 md:px-16">
          <p className="section-label">WORK</p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.client}-${project.project}`}
                client={project.client}
                project={project.project}
                type={project.type}
                year={project.year}
                href="#"
                delay={index * 0.08}
              />
            ))}
          </div>
        </section>

        <section
          id="director"
          className="mx-auto max-w-[1280px] border-t border-[var(--border)] px-10 py-40 md:px-16"
        >
          <p className="section-label">DIRECTOR</p>
          <div className="gap-16 md:grid md:grid-cols-5">
            <div className="md:col-span-3">
              <h2 className="font-cormorant text-[56px] leading-none text-[var(--text-primary)]">
                Brendan Lynch
              </h2>
              <p className="mt-3 font-inter text-sm uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Line Producer · Director
              </p>

              <p className="mt-8 max-w-[480px] font-inter text-[15px] leading-[1.9] text-[var(--text-muted)]">
                Los Angeles-based line producer and director with over a decade in
                commercial and branded content. Credits include Netflix, Toyota,
                BTS, Notion, Atlassian, and more than twenty global brands.
              </p>

              <div className="mt-10 flex items-center">
                <a
                  href="#"
                  className="font-inter text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                >
                  Reel ↗
                </a>
                <a
                  href="#contact"
                  className="ml-8 font-inter text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Contact →
                </a>
              </div>
            </div>

            <div className="mt-12 md:col-span-2 md:mt-0">
              <div className="flex aspect-[3/4] items-center justify-center border border-[var(--border)] bg-[var(--bg-surface)]">
                <div className="text-center">
                  <p className="font-cormorant text-[64px] leading-none text-[var(--text-dim)]">
                    BL
                  </p>
                  <p className="mt-2 font-inter text-[10px] tracking-wide text-[var(--text-dim)]">
                    ← replace with headshot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-[640px] border-t border-[var(--border)] px-10 py-40 md:px-16"
        >
          <p className="section-label">ABOUT</p>
          <p className="mt-6 font-inter text-[16px] leading-[1.9] text-[var(--text-muted)]">
            The Varied is a commercial production company operating at the
            intersection of craft and systems. We produce high-end commercials,
            music videos, and branded content — and we have built the
            infrastructure to run productions with precision.
          </p>
          <p className="mt-4 font-inter text-[16px] leading-[1.9] text-[var(--text-muted)]">
            Founded in Los Angeles. Available worldwide.
          </p>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-[1280px] border-t border-[var(--border)] px-10 py-40 text-center md:px-16"
        >
          <p className="section-label text-center">CONTACT</p>
          <h2 className="mt-6 font-cormorant text-[72px] leading-none text-[var(--text-primary)] italic md:text-[88px]">
            Let&apos;s make something.
          </h2>
          <a
            href="mailto:hello@thevaried.co"
            className="mt-8 block font-inter text-lg text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            hello@thevaried.co
          </a>
          <p className="mt-3 font-inter text-[13px] tracking-wide text-[var(--text-dim)]">
            Los Angeles
          </p>
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
