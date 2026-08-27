"use client";

import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";
import { Icon } from "../ui/Icons";
import { links } from "@/lib/data";

export default function Education() {
  const { t } = useLang();
  const e = t.education;

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={e.index} label={e.label} title={e.title} />

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card card-hover h-full p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl leading-snug font-bold text-paper">
                    {e.udemy.school}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                    {e.udemy.org} · {e.udemy.period}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] whitespace-nowrap tracking-widest text-emerald-300 uppercase">
                  <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {e.udemy.badge}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{e.udemy.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.udemy.subjects.map((s) => (
                  <span key={s} className="chip chip-sm">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={links.udemy}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-cyan uppercase transition-colors hover:text-paper"
              >
                {e.udemy.cta}
                <Icon
                  name="arrowUpRight"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card card-hover h-full p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl leading-snug font-bold text-paper">
                    {e.ufrn.school}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs tracking-[0.25em] text-muted uppercase">
                    {e.ufrn.place} · {e.ufrn.period}
                  </p>
                </div>
                <span className="text-2xl">🇧🇷</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{e.ufrn.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.ufrn.subjects.map((s) => (
                  <span key={s} className="chip chip-sm">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-muted/80">
                {e.ufrn.status}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-line bg-white/[0.02] px-6 py-5">
            <span className="mt-0.5 text-lg leading-none text-cyan">∞</span>
            <p className="text-sm leading-relaxed text-muted">{e.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
