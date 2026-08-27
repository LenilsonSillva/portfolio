"use client";

import { useLang } from "../providers/LanguageContext";
import { Icon } from "../ui/Icons";
import { links } from "@/lib/data";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "stack", label: t.nav.stack },
    { id: "playhome", label: t.nav.playhome },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "journey", label: t.nav.journey },
    { id: "beyond", label: t.nav.beyond },
    { id: "contact", label: t.nav.contact },
  ];

  const socials = [
    { name: "github" as const, href: links.github, label: "GitHub" },
    { name: "linkedin" as const, href: links.linkedin, label: "LinkedIn" },
    { name: "instagram" as const, href: links.instagram, label: "Instagram" },
    { name: "facebook" as const, href: links.facebook, label: "Facebook" },
    { name: "mail" as const, href: links.email, label: "Email" },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <a href="#home" className="font-display text-2xl font-bold text-paper">
              LSO<span className="text-cyan">.</span>
            </a>
            <p className="mt-2 font-semibold text-paper">{t.meta.name}</p>
            <p className="text-sm text-muted">
              {f.role} · {f.place}
            </p>
            <p className="mt-3 font-mono text-xs text-muted/80">{f.stack}</p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-14">
            <nav>
              <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                {f.nav}
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:flex-col md:gap-x-0 md:gap-y-2">
                {navItems.map((it) => (
                  <li key={it.id}>
                    <a
                      href={`#${it.id}`}
                      className="text-muted transition-colors hover:text-paper"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                {f.social}
              </p>
              <div className="flex flex-row gap-3 md:flex-col md:gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="text-muted transition-colors hover:text-cyan"
                  >
                    <Icon name={s.name} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">{f.rights}</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-cyan"
          >
            {f.top}
            <Icon
              name="arrowUp"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
