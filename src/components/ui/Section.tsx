"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInViewRef } from "./RevealCSS";

/**
 * IntersectionObserver + CSS reveal (same system as RevealCSS).
 *
 * Replaces the old framer-motion whileInView implementation: the motion is
 * compositor-driven CSS (no rAF), which keeps working reliably on iOS
 * Safari even after the heavy intro screen — and content is never lost if
 * JS is slow/stalled (hiding only applies under html.js-live).
 */
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
  const ref = useInViewRef<HTMLDivElement>();
  const vars: CSSProperties = { ...({} as CSSProperties) };
  if (delay) (vars as Record<string, string>)["--d"] = `${delay}s`;
  if (y !== 28) (vars as Record<string, string>)["--ry"] = `${y}px`;
  return (
    <div
      ref={ref}
      className={`io-scope reveal-css ${className}`}
      style={Object.keys(vars).length ? vars : undefined}
    >
      {children}
    </div>
  );
}

/** Big numbered section header: 01 ──── LABEL */
export function SectionKicker({
  index,
  label,
  center = false,
  className = "",
}: {
  index: string;
  label: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={`mb-4 flex items-center gap-3 md:gap-4 ${
        center ? "justify-center" : ""
      } ${className}`}
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
  const ref = useInViewRef<HTMLDivElement>();
  return (
    <div ref={ref} className="io-scope overflow-hidden">
      <h2 className="slide-css font-display text-4xl font-bold tracking-tight text-paper md:text-5xl lg:text-6xl">
        {title}
      </h2>
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
