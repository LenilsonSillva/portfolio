"use client";

import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";

export default function Experience() {
  const { t } = useLang();
  const x = t.experience;

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={x.index} label={x.label} title={x.title} />

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card relative h-full overflow-hidden p-7">
              <div
                aria-hidden
                className="absolute -top-12 right-0 h-36 w-36 rounded-full bg-cyan/15 blur-3xl"
              />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-paper">
                    {x.independent.role}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                    {x.independent.org}
                  </p>
                </div>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] whitespace-nowrap text-muted">
                  {x.independent.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {x.independent.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {x.independent.areas.map((a) => (
                  <span key={a} className="chip chip-sm">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card card-hover h-full p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-paper">
                    {x.indutel.role}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs tracking-[0.25em] text-muted uppercase">
                    {x.indutel.org} · {x.indutel.place}
                  </p>
                </div>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] whitespace-nowrap text-muted">
                  {x.indutel.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {x.indutel.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-paper/80">
                    <span className="mt-0.5 text-cyan">▹</span> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-cyan/20 bg-cyan/[0.04] p-4 text-sm leading-relaxed text-muted">
                {x.indutel.note}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {x.indutel.skills.map((s) => (
                  <span key={s} className="chip chip-sm">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
