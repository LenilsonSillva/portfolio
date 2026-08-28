"use client";

import type { CSSProperties } from "react";
import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionKicker } from "../ui/Section";
import { RevealCSS } from "../ui/RevealCSS";
import { Magnetic } from "../ui/Magnetic";
import { Icon, type IconName } from "../ui/Icons";
import { links } from "@/lib/data";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="glow absolute top-1/2 left-1/2 h-72 w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[100px] md:h-[420px] md:w-[720px] md:blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionKicker index={c.index} label={c.kicker} />

        <div className="mx-auto max-w-3xl text-center">
          <RevealCSS>
            <div className="overflow-hidden">
              <h2 className="slide-css font-display text-[32px] font-bold tracking-tight text-paper min-[420px]:text-4xl md:text-5xl lg:text-6xl">
                {c.titleA}
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2
                className="slide-css text-gradient font-display text-[32px] font-bold tracking-tight min-[420px]:text-4xl md:text-5xl lg:text-6xl"
                style={{ "--sd": "0.14s" } as CSSProperties}
              >
                {c.titleB}
              </h2>
            </div>
          </RevealCSS>

          <RevealCSS delay={0.1}>
            <p className="mt-6 text-lg font-medium text-paper/85 md:text-xl">{c.call}</p>
          </RevealCSS>

          <RevealCSS delay={0.18}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted italic">
              “{c.quote}”
            </p>
          </RevealCSS>

          <Reveal delay={0.16} className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <a
                href={links.email}
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet to-cyan px-8 py-4 font-semibold text-[#05060b]"
              >
                <Icon name="mail" className="h-5 w-5" /> {c.emailCta}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-line px-8 py-4 font-medium text-paper/90 transition-colors hover:border-cyan/60 hover:bg-cyan/5"
              >
                <Icon name="chat" className="h-5 w-5 text-cyan" /> WhatsApp
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <a
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card card-hover flex items-center gap-4 p-5 text-left"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-cyan">
                  <Icon name={it.icon as IconName} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
                    {it.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-paper/90">
                    {it.value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
