"use client";

import Image from "next/image";
import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";

export default function Beyond() {
  const { t } = useLang();
  const b = t.beyond;

  return (
    <section id="beyond" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute right-[-12%] bottom-0 h-[380px] w-[380px] rounded-full bg-amber/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={b.index} label={b.label} title={b.title} />

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Music */}
          <Reveal>
            <div className="card card-hover h-full overflow-hidden">
              <div className="relative h-44">
                <Image
                  src="/images/music.jpg"
                  alt="MIDI keyboard in a dark studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-3 left-5">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-cyan uppercase">
                    {b.music.sub}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-paper">
                    🎹 {b.music.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted">{b.music.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {b.music.instruments.map((s) => (
                    <span key={s} className="chip chip-sm">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {b.music.tech.map((s) => (
                    <span key={s} className="chip chip-sm">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-5 mb-2 font-mono text-[10px] tracking-[0.3em] text-muted/70 uppercase">
                  {b.music.gearTitle}
                </p>
                <ul className="space-y-1 font-mono text-xs text-muted">
                  {b.music.gear.map((g) => (
                    <li key={g}>· {g}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Games */}
          <Reveal delay={0.08}>
            <div className="card card-hover flex h-full flex-col p-6">
              <h3 className="font-display text-2xl font-bold text-paper">
                🎮 {b.games.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.games.text}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {b.games.items.map((s) => (
                  <span key={s} className="chip chip-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cars */}
          <Reveal delay={0.16}>
            <div className="card card-hover flex h-full flex-col overflow-hidden">
              <div className="relative h-44">
                <Image
                  src="/images/cars.jpg"
                  alt="Classic car at night"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-3 left-5">
                  <h3 className="font-display text-2xl font-bold text-paper">
                    🚗 {b.cars.title}
                  </h3>
                </div>
              </div>
              <div className="flex-1 p-6">
                <p className="text-sm leading-relaxed text-muted">{b.cars.text}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
