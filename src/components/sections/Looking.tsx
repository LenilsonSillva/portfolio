"use client";

import { motion } from "framer-motion";
import { useLang } from "../providers/LanguageContext";
import { Reveal } from "../ui/Section";
import { EASE } from "@/lib/motion";

export default function Looking() {
  const { t } = useLang();
  const l = t.looking;

  return (
    <section id="looking" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal className="mb-5 flex items-center justify-center gap-4 font-mono text-[11px] tracking-[0.35em] text-muted uppercase">
          <span className="text-cyan">{l.index}</span>
          <span className="h-px w-10 bg-cyan/40" />
          {l.label}
        </Reveal>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="font-display text-4xl font-bold tracking-tight text-paper md:text-5xl lg:text-6xl"
          >
            {l.title}
          </motion.h2>
        </div>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">{l.p}</p>
        </Reveal>

        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {l.roles.map((r, i) => (
            <Reveal key={r} delay={i * 0.05} y={16}>
              <span className="inline-block cursor-default rounded-full border border-line bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-paper/90 transition-colors hover:border-cyan/50 hover:bg-cyan/5">
                {r}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-5">
          {l.meta.map((m) => (
            <div key={m.k}>
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                {m.icon} {m.k}
              </p>
              <p className="mt-1.5 font-semibold text-paper">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
