"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionKicker } from "../ui/Section";
import { Icon } from "../ui/Icons";
import { links } from "@/lib/data";
import { EASE } from "@/lib/motion";

const badgePositions = ["right-4 top-6", "left-4 top-1/3", "right-6 bottom-16"];

const btnBase =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all";

export default function PlayHome() {
  const { t } = useLang();
  const p = t.playhome;
  const [tab, setTab] = useState("overview");

  return (
    <section id="playhome" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Header: 03 — FEATURED PROJECT */}
        <SectionKicker index={p.index} label={p.kicker} />

        {/* Icon + PLAYHOME */}
        <div className="flex flex-wrap items-center gap-5 md:gap-7">
          <Reveal className="relative shrink-0" y={36}>
            <div
              aria-hidden
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 blur-xl"
            />
            <Image
              src="/images/playhome-icon.png"
              alt="PlayHome logo"
              width={112}
              height={112}
              className="relative h-20 w-20 rounded-2xl border border-white/10 sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </Reveal>
          <Reveal delay={0.05} className="min-w-0 flex-1">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="font-display text-5xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl"
              >
                Play<span className="text-gradient">Home</span>
              </motion.h2>
            </div>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              {p.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-[10px] tracking-widest text-emerald-300 uppercase">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {p.status}
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs">
            {p.meta.map((m) => (
              <span key={m.k} className="flex items-center gap-2">
                <span className="tracking-[0.25em] text-muted/70 uppercase">{m.k}:</span>
                <span className="text-paper/90">{m.v}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* left: lead + tabs */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-paper/90 md:text-xl">{p.lead}</p>
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.tabs.map((tb) => (
                <button
                  key={tb.id}
                  onClick={() => setTab(tb.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    tab === tb.id
                      ? "bg-gradient-to-r from-violet to-cyan text-[#05060b]"
                      : "border border-line text-muted hover:border-cyan/40 hover:text-paper"
                  }`}
                >
                  {tb.label}
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[320px] md:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  {tab === "overview" && (
                    <div>
                      <p className="text-base leading-relaxed text-paper/85">
                        {p.overview.body}
                      </p>
                      <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {p.overview.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2.5 rounded-lg border border-line bg-white/[0.02] px-3.5 py-2.5 text-sm text-paper/85"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet to-cyan" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tab === "realtime" && (
                    <div>
                      <p className="text-base leading-relaxed text-paper/85">
                        {p.realtime.body}
                      </p>
                      <div className="my-6 flex flex-wrap items-center gap-2 font-mono text-xs">
                        {p.realtime.flow.map((f, i) => (
                          <span key={f} className="flex items-center gap-2">
                            <span className="rounded-lg border border-cyan/30 bg-cyan/[0.06] px-3 py-1.5 text-cyan">
                              {f}
                            </span>
                            {i < p.realtime.flow.length - 1 && (
                              <span className="text-muted">→</span>
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="mb-5 flex items-center gap-2 font-mono text-xs text-muted">
                        <span className="text-cyan">⬢</span> {p.realtime.deployNote}
                      </p>
                      <ul className="grid gap-2.5 sm:grid-cols-2">
                        {p.realtime.items.map((it) => (
                          <li key={it} className="flex items-start gap-2 text-sm text-paper/85">
                            <span className="mt-0.5 text-cyan">▹</span> {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tab === "games" && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-line bg-white/[0.02] p-5">
                        <h4 className="font-display text-lg font-semibold text-cyan">
                          {p.games.impostor.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {p.games.impostor.desc}
                        </p>
                        <ul className="mt-4 space-y-1.5">
                          {p.games.impostor.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs text-paper/75">
                              <span className="mt-0.5 text-cyan">▹</span> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-line bg-white/[0.02] p-5">
                        <h4 className="font-display text-lg font-semibold text-violet">
                          {p.games.crypto.name}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {p.games.crypto.desc}
                        </p>
                        <div className="mt-4 space-y-3">
                          {p.games.crypto.modes.map((m) => (
                            <div key={m.name}>
                              <p className="text-xs font-semibold text-paper/90">{m.name}</p>
                              <p className="mt-0.5 text-xs text-muted">{m.desc}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.games.crypto.features.map((f) => (
                            <span key={f} className="chip chip-sm">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {tab === "i18n" && (
                    <div>
                      <p className="text-base leading-relaxed text-paper/85">{p.i18n.body}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-transparent bg-gradient-to-r from-violet to-cyan px-4 py-1.5 text-sm font-semibold text-[#05060b]">
                          {p.i18n.total}
                        </span>
                        {p.i18n.languages.map((l) => (
                          <span
                            key={l}
                            className="rounded-full border border-cyan/30 bg-cyan/[0.05] px-4 py-1.5 text-sm text-cyan"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-muted">{p.i18n.note}</p>
                    </div>
                  )}

                  {tab === "monetization" && (
                    <div>
                      <p className="text-base leading-relaxed text-paper/85">
                        {p.monetization.body}
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {p.monetization.items.map((it) => (
                          <div
                            key={it.name}
                            className="rounded-xl border border-amber/25 bg-amber/[0.04] p-5"
                          >
                            <h4 className="font-display font-semibold text-amber">
                              {it.name}
                            </h4>
                            <p className="mt-1.5 text-sm text-muted">{it.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-muted">
                        {p.monetization.goal}
                      </p>
                    </div>
                  )}

                  {tab === "release" && (
                    <div>
                      <p className="text-base leading-relaxed text-paper/85">
                        {p.release.body}
                      </p>
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {p.release.items.map((it) => (
                          <li key={it} className="flex items-start gap-2 text-sm text-paper/85">
                            <span className="mt-0.5 text-cyan">▹</span> {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <Reveal delay={0.05}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={links.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btnBase} bg-gradient-to-r from-violet to-cyan font-semibold text-[#05060b]`}
                >
                  <Icon name="googleplay" className="h-4 w-4" /> {p.links.play}
                </a>
                <a
                  href={links.playHomeWeb}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btnBase} border border-line text-paper/90 hover:border-cyan/50 hover:bg-cyan/5`}
                >
                  <Icon name="external" className="h-4 w-4" /> {p.links.web}
                </a>
                <a
                  href={links.playHomeWebRepo}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btnBase} border border-line text-muted hover:border-violet/50 hover:text-paper`}
                >
                  <Icon name="github" className="h-4 w-4" /> {p.links.codeWeb}
                </a>
                <a
                  href={links.playHomeBackendRepo}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btnBase} border border-line text-muted hover:border-violet/50 hover:text-paper`}
                >
                  <Icon name="github" className="h-4 w-4" /> {p.links.codeBackend}
                </a>
              </div>
            </Reveal>
          </div>

          {/* right: key visual (first on mobile) */}
          <div className="order-first lg:order-none lg:sticky lg:top-28">
            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-violet/30 to-cyan/20 blur-2xl"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
                  <Image
                    src="/images/playhome-key.jpg"
                    alt="PlayHome — social multiplayer gaming platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  {p.badges.map((b, i) => (
                    <motion.span
                      key={b}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute ${badgePositions[i]} rounded-full border border-white/15 bg-ink/70 px-4 py-1.5 text-xs font-medium text-paper/90 backdrop-blur`}
                    >
                      {b}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stack */}
        <Reveal className="mt-16">
          <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
            {p.stackTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            {Object.values(p.stack).flat().map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted">
            <span className="mt-0.5 text-cyan">ⓘ</span> {p.privacyNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
