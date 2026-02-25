"use client";

import { motion } from "framer-motion";

export default function HeroIntro() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-[1280px] px-10 pt-24 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 font-inter text-[11px] uppercase tracking-[0.3em] text-[var(--text-dim)]"
        >
          THE VARIED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-cormorant text-[80px] leading-none text-[var(--text-primary)] not-italic md:text-[96px]"
        >
          Production craft.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="font-cormorant text-[80px] leading-none text-[var(--text-primary)] italic md:text-[96px]"
        >
          Operational intelligence.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
          className="mt-10 font-inter text-[13px] tracking-wide text-[var(--text-muted)]"
        >
          Los Angeles · Commercial · Music Video · Branded Content
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-4 font-inter text-[12px] text-[var(--text-dim)]"
        >
          Pizza Hut · Netflix · Toyota · BTS · Notion · Atlassian · Sonos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease: "easeOut" }}
          className="mt-20 flex w-[80px] flex-col items-center"
        >
          <span className="h-px w-full bg-[var(--accent)]" />
          <span className="mt-3 text-[var(--accent)]">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
