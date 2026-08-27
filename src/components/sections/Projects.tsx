"use client";

import { useLang } from "../providers/LanguageContext";
import { Reveal, SectionHeader } from "../ui/Section";
import { Icon } from "../ui/Icons";
import { links, repos } from "@/lib/data";

export default function Projects() {
  const { t } = useLang();
  const pr = t.projects;
  const u = pr.umesppb;

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute top-0 right-[-12%] h-[380px] w-[380px] rounded-full bg-cyan/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader index={pr.index} label={pr.label} title={pr.title} />

        {/* UMESPPB featured card */}
        <Reveal>
          <div className="card relative mb-8 overflow-hidden p-6 md:p-10">
            <div
              aria-hidden
              className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-violet/20 blur-3xl"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl">🏛️</span>
                <h3 className="font-display text-2xl font-bold text-paper sm:text-3xl">
                  {u.name}
                </h3>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-widest text-cyan uppercase">
                  {u.tag}
                </span>
              </div>

              <p className="mt-4 font-display text-lg font-semibold text-paper/90 md:text-xl">
                {u.title}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                {u.desc}
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-cyan uppercase">
                    {u.featuresTitle}
                  </p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {u.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-paper/85"
                      >
                        <span className="mt-0.5 text-cyan">▹</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-cyan uppercase">
                    {u.techTitle}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1.5 text-xs font-semibold text-paper/70">Frontend</p>
                      <div className="flex flex-wrap gap-1.5">
                        {u.tech.frontend.map((tech) => (
                          <span key={tech} className="chip chip-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-1.5 text-xs font-semibold text-paper/70">Backend</p>
                      <div className="flex flex-wrap gap-1.5">
                        {u.tech.backend.map((tech) => (
                          <span key={tech} className="chip chip-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-1.5 text-xs font-semibold text-paper/70">Database</p>
                      <div className="flex flex-wrap gap-1.5">
                        {u.tech.database.map((tech) => (
                          <span key={tech} className="chip chip-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="mt-5 inline-block rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted">
                    {u.status}
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-amber/25 bg-amber/[0.04] p-4 text-sm leading-relaxed text-muted">
                {u.context}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
                  {u.partsNote}
                </span>
                {u.parts.map((part) => (
                  <a
                    key={part.repo}
                    href={repos[part.repo]}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-sm text-paper/85 transition-colors hover:border-cyan/50 hover:text-cyan"
                  >
                    <Icon name="github" className="h-4 w-4" />
                    {part.name}
                    <Icon
                      name="arrowUpRight"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Other repos */}
        <div className="grid gap-4 md:grid-cols-2">
          {pr.cards.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.08}>
              <div className="card card-hover group flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-paper transition-colors group-hover:text-cyan">
                      {c.name}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
                      {c.type}
                    </p>
                  </div>
                  <a
                    href={repos[c.repo]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${c.name} repository`}
                    className="mt-1 text-muted transition-colors hover:text-cyan"
                  >
                    <Icon name="github" className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
                <div className="mt-4 grid flex-1 grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
                  {c.points.map((pt) => (
                    <p key={pt} className="flex items-start gap-1.5 text-xs text-paper/70">
                      <span className="mt-0.5 text-cyan">▹</span> {pt}
                    </p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tech.map((tech) => (
                    <span key={tech} className="chip chip-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* all repos card */}
          <Reveal delay={0.1}>
            <a
              href={links.githubRepos}
              target="_blank"
              rel="noreferrer"
              className="card card-hover group flex h-full flex-col items-center justify-center gap-3 p-6 text-center"
            >
              <span className="text-gradient inline-block font-display text-4xl font-bold transition-transform group-hover:scale-110">
                →
              </span>
              <span className="font-display text-lg font-semibold text-paper">
                {pr.more.title}
              </span>
              <span className="text-sm text-muted">{pr.more.desc}</span>
              <span className="font-mono text-xs tracking-widest text-cyan uppercase">
                {pr.more.cta} ↗
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
