"use client";

import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";
import { links } from "@/lib/data";

export default function StackSection() {
  const { t } = useLang();
  const s = t.stack;

  return (
    <section id="stack" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-violet/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={s.index} label={s.label} title={s.title} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {s.groups.map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 0.06}>
              <div className="card card-hover h-full p-6">
                <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                  {g.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={links.udemy}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-violet/30 bg-violet/5 px-6 py-5 transition-colors hover:border-violet/60"
          >
            <p className="text-sm text-paper/85 md:text-base">
              <span className="animate-pulse-dot mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
              {s.note}
            </p>
            <span className="inline-block font-mono text-xs tracking-widest text-cyan uppercase transition-transform group-hover:translate-x-1">
              {s.noteLink} →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
