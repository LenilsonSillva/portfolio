"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useLang } from "../providers/LanguageContext";
import { Magnetic } from "../ui/Magnetic";
import { EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({ introDone }: { introDone: boolean }) {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // While the intro plays (client only), the hero is hidden. The server
  // render keeps it fully visible so the page can never stay black if JS
  // is slow or unavailable (iOS): the opaque intro overlay covers it.
  const phase = introDone || !mounted ? "show" : "hidden";

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
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute right-[-10%] bottom-0 h-[420px] w-[520px] rounded-full bg-cyan/10 blur-[130px]"
      />

      <motion.div
        variants={container}
        initial={mounted ? "hidden" : "show"}
        animate={phase}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8"
      >
        <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-paper/90">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.hero.available}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            📍 {t.hero.location}
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(2.7rem,9vw,6.5rem)] leading-[0.95] font-bold tracking-tight">
          <span className="block overflow-hidden">
            <motion.span variants={item} className="block text-paper">
              {t.hero.titleA}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={item} className="text-gradient block">
              {t.hero.titleB}
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {t.hero.sub}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-muted/80"
        >
          {t.hero.body}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
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
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted md:text-left"
        >
          {t.hero.workModel}
        </motion.p>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8, ease: EASE }}
        className="relative z-10 mx-auto mt-14 w-full max-w-6xl px-5 md:px-8"
      >
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              {t.hero.scroll}
            </span>
            <div className="h-8 w-px overflow-hidden bg-white/10">
              <motion.span
                className="block h-3 w-px bg-cyan"
                animate={{ y: [-12, 32] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
