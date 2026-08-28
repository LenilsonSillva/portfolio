"use client";

import Image from "next/image";
import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";

export default function Beyond() {
  const { t } = useLang();
  const b = t.beyond;

  return (
    <section id="beyond" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="glow absolute top-1/3 left-[-15%] h-72 w-72 rounded-full bg-violet/10 blur-[90px] md:h-[420px] md:w-[420px] md:blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={b.index} label={b.label} title={b.title} />

        <Reveal>
          <div className="card relative overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* image */}
              <div className="relative h-60 sm:h-72 lg:col-span-2 lg:h-auto">
                <Image
                  src="/images/music.jpg"
                  alt="MIDI keyboard in a dark studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink/40"
                />
                <div className="absolute bottom-5 left-6">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-cyan uppercase">
                    {b.sub}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-bold text-paper">
                    🎵 {b.music.title}
                  </h3>
                </div>
              </div>

              {/* content */}
              <div className="p-6 md:p-10 lg:col-span-3">
                <p className="text-base leading-relaxed text-paper/90">{b.intro}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{b.intro2}</p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-cyan uppercase">
                      {b.music.instrumentsTitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {b.music.instruments.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 mb-3 font-mono text-[11px] tracking-[0.3em] text-cyan uppercase">
                      {b.music.techTitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {b.music.tech.map((s) => (
                        <span key={s} className="chip chip-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-cyan uppercase">
                      🎛️ {b.music.setupTitle}
                    </p>
                    <ul className="space-y-3">
                      {b.music.setup.map((s) => (
                        <li key={s.name} className="flex flex-col">
                          <span className="text-sm font-semibold text-paper/90">{s.name}</span>
                          <span className="font-mono text-xs text-muted">{s.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 border-t border-line pt-8">
                  <p className="font-display text-lg font-semibold text-paper">
                    💡 {b.creativity.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{b.creativity.text}</p>
                  <p className="mt-6 font-display text-2xl font-bold text-gradient md:text-3xl">
                    “{b.creativity.quote}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
