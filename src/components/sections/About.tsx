"use client";

import Image from "next/image";
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
          {/* portrait card */}
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative">
                <div
                  aria-hidden
                  className="glow absolute -inset-4 rounded-[32px] bg-gradient-to-br from-violet/25 to-cyan/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl border border-line">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/portrait.jpg"
                      alt={t.meta.name}
                      fill
                      sizes="(max-width: 1024px) 45vw, 32vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-2xl font-bold text-paper">{t.meta.name}</p>
                    <p className="mt-1 font-mono text-xs text-cyan/90">{t.meta.role}</p>
                    <p className="mt-1 font-mono text-[11px] text-muted">
                      🇵🇹 {t.hero.location}
                    </p>
                  </div>
                </div>
              </div>
              <blockquote className="card mt-6 p-6">
                <p className="font-display text-xl leading-snug font-semibold text-paper/95">
                  “{a.quote}”
                </p>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed md:text-lg">
              <Reveal>
                <p className="text-center text-paper/90 md:text-left">{a.p1}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-center text-muted md:text-left">{a.p2}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-center text-muted md:text-left">{a.p3}</p>
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
