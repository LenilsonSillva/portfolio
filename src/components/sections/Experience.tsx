"use client";

import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";

export default function Experience() {
  const { t } = useLang();
  const x = t.experience;
  const inc = x.independent;

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={x.index} label={x.label} title={x.title} />

        <Reveal>
          <div className="card card-hover relative overflow-hidden p-7 md:p-10">
            <div
              aria-hidden
              className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-cyan/15 blur-3xl"
            />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-paper md:text-3xl">
                    {inc.role}
                  </h3>
                  <p className="mt-2 font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                    {inc.org} · {inc.place}
                  </p>
                </div>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] whitespace-nowrap text-muted">
                  {inc.period}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                {inc.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {inc.areas.map((a) => (
                  <span key={a} className="chip chip-sm">
                    {a}
                  </span>
                ))}
              </div>

              <a
                href="#playhome"
                className="group mt-8 inline-flex flex-wrap items-center gap-2 rounded-xl border border-violet/30 bg-violet/5 px-5 py-3.5 text-sm text-paper/90 transition-colors hover:border-violet/60"
              >
                <span className="text-base">🎮</span>
                <span>{x.highlight}</span>
                <span className="font-mono text-xs tracking-widest text-cyan uppercase transition-transform group-hover:translate-x-1">
                  {x.highlightCta} →
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
