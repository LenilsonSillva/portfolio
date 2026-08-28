"use client";

import { motion } from "framer-motion";
import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";
import { EASE } from "@/lib/motion";

export default function Journey() {
  const { t } = useLang();
  const j = t.journey;

  return (
    <section id="journey" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute top-1/4 left-[-12%] h-72 w-72 rounded-full bg-violet/10 blur-[90px] md:h-[400px] md:w-[400px] md:blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={j.index} label={j.label} title={j.title} />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-violet via-cyan/60 to-transparent"
          />
          <ol className="space-y-8">
            {j.items.map((it, i) => (
              <li key={it.title} className="relative pl-14">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                  className="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink text-sm"
                >
                  {it.icon}
                </motion.div>
                <Reveal delay={0.05}>
                  <div className="card card-hover p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-paper">
                        {it.title}
                      </h3>
                      <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
