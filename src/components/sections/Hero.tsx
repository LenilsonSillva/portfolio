"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useLang } from "../providers/LanguageContext";
import { Magnetic } from "../ui/Magnetic";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function Hero({ introDone }: { introDone: boolean }) {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // SSR / no-JS: no class → hero fully visible (the page can never be
  // left black). While the intro plays (client only): items are hidden
  // behind the opaque overlay. When the intro ends: items rise in via
  // pure CSS animations (compositor-driven, immune to iOS rAF stalls).
  const containerClass = !mounted ? "" : introDone ? "intro-live is-done" : "intro-live";

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-16 pt-28"
    >
      {/* background */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="glow absolute -top-40 left-1/2 h-80 w-[480px] -translate-x-1/2 rounded-full bg-violet/20 blur-[100px] md:h-[520px] md:w-[820px] md:blur-[140px]"
      />
      <div
        aria-hidden
        className="glow absolute right-[-10%] bottom-0 h-64 w-[360px] rounded-full bg-cyan/10 blur-[90px] md:h-[420px] md:w-[520px] md:blur-[130px]"
      />

      <div className={`hero ${containerClass} relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8`}>
        <div className="hero-item mb-8 flex flex-wrap items-center gap-3" style={d(0.05)}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-paper/90">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.hero.available}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            📍 {t.hero.location}
          </span>
        </div>

        <h1 className="font-display text-[clamp(2.7rem,9vw,6.5rem)] leading-[0.95] font-bold tracking-tight">
          <span className="block overflow-hidden">
            <span className="hero-item block text-paper" style={d(0.12)}>
              {t.hero.titleA}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-item text-gradient block" style={d(0.19)}>
              {t.hero.titleB}
            </span>
          </span>
        </h1>

        <p
          className="hero-item mt-7 max-w-2xl text-lg leading-relaxed text-muted"
          style={d(0.26)}
        >
          {t.hero.sub}
        </p>

        <p
          className="hero-item mt-4 max-w-2xl text-sm leading-relaxed text-muted/80"
          style={d(0.63)}
        >
          {t.hero.body}
        </p>

        <div
          className="hero-item mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          style={d(0.4)}
        >
          <Magnetic>
            <a
              href="#playhome"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-7 py-3.5 font-semibold text-[#05060b]"
            >
              {t.hero.ctaProjects}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-medium text-paper/90 transition-colors hover:border-cyan/60 hover:bg-cyan/5"
            >
              {t.hero.ctaContact}
            </a>
          </Magnetic>
        </div>

        <p
          className="hero-item mt-8 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted md:text-left"
          style={d(0.47)}
        >
          {t.hero.workModel}
        </p>
      </div>

      {/* scroll hint */}
      <div className="relative z-10 mx-auto mt-14 w-full max-w-6xl px-5 md:px-8">
        <div className="intro-fade-in" style={d(1.1)}>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 text-muted">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                {t.hero.scroll}
              </span>
              <div className="h-8 w-px overflow-hidden bg-white/10">
                <span className="hero-scroll-bar block h-3 w-px bg-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
