"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  client: string;
  project: string;
  type: string;
  year: string;
  href?: string;
  delay?: number;
};

export default function ProjectCard({
  client,
  project,
  type,
  year,
  href = "#",
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.005 }}
      className="group relative block border border-[var(--border)] bg-[var(--bg-surface)] p-12 transition-all duration-200 hover:border-[var(--accent)]"
    >
      <span className="absolute top-6 right-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-[var(--accent)]">
        ↗
      </span>

      <h3 className="font-cormorant text-4xl leading-none text-[var(--text-primary)]">
        {client}
      </h3>
      <p className="mt-3 font-inter text-sm tracking-wide text-[var(--text-muted)]">
        {project}
      </p>
      <p className="mt-6 font-inter text-[11px] uppercase tracking-[0.2em] text-[var(--text-dim)]">
        {type} · {year}
      </p>
    </motion.a>
  );
}
