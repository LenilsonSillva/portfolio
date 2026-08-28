"use client";

import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionKicker, SectionTitle } from "../ui/Section";

export default function Looking() {
  const { t } = useLang();
  const l = t.looking;

  return (
    <section id="looking" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-72 w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[100px] md:h-[420px] md:w-[720px] md:blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionKicker index={l.index} label={l.label} />

        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle title={l.title} />

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {l.p}
            </p>
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
      </div>
    </section>
  );
}
