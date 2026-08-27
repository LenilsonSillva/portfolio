"use client";

import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={a.index} label={a.label} title={a.title} />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <div className="card card-hover relative overflow-hidden p-8">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/25 blur-3xl"
                />
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-cyan font-display text-3xl font-bold text-[#05060b]">
                  LS
                </div>
                <p className="mt-6 font-display text-2xl leading-snug font-semibold text-paper">
                  “{a.quote}”
                </p>
                <div className="mt-6 border-t border-line pt-5 font-mono text-xs leading-relaxed text-muted">
                  <p className="text-paper/90">{t.meta.name}</p>
                  <p className="text-cyan/80">{t.meta.role}</p>
                  <p className="mt-1">🇵🇹 {t.hero.location}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed md:text-lg">
              <Reveal>
                <p className="text-paper/90">{a.p1}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-muted">{a.p2}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-muted">{a.p3}</p>
              </Reveal>
            </div>

            <div className="mt-12">
              <Reveal className="mb-5 font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
                — {a.workTitle}
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {a.work.map((w, i) => (
                  <Reveal key={w.title} delay={i * 0.07}>
                    <div className="card card-hover h-full p-6">
                      <div className="mb-3 h-1.5 w-8 rounded-full bg-gradient-to-r from-violet to-cyan" />
                      <h3 className="font-display text-lg font-semibold text-paper">
                        {w.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
