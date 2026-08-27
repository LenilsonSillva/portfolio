"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal className="mb-5 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
        <span className="text-cyan">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-cyan/60 to-transparent" />
        <span>{label}</span>
      </Reveal>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-display text-4xl font-bold tracking-tight text-paper md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
