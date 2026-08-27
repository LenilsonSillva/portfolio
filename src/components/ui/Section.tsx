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

/** Big numbered section header: 01 ──── LABEL */
export function SectionKicker({
  index,
  label,
  center = false,
}: {
  index: string;
  label: string;
  center?: boolean;
}) {
  return (
    <Reveal
      className={`mb-6 flex items-center gap-3 md:gap-4 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="text-gradient font-display text-3xl leading-none font-bold md:text-4xl">
        {index}
      </span>
      <span className="h-px w-8 bg-gradient-to-r from-cyan/60 to-transparent md:w-14" />
      <span className="font-mono text-sm uppercase tracking-[0.3em] text-muted md:text-base">
        {label}
      </span>
    </Reveal>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
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
      <SectionKicker index={index} label={label} />
      <SectionTitle title={title} />
    </div>
  );
}
