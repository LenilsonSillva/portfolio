"use client";

import { useEffect, useRef, useState } from "react";
import { LANG_OPTIONS, useLang } from "./providers/LanguageContext";
import { Icon } from "./ui/Icons";
import { links } from "@/lib/data";

function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center rounded-full border border-line p-0.5 font-mono ${
        compact ? "text-[10px]" : "text-[10px] sm:text-[11px]"
      }`}
    >
      {LANG_OPTIONS.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          aria-pressed={lang === l.id}
          className={`rounded-full px-2 py-1 tracking-wider transition-colors sm:px-2.5 ${
            lang === l.id ? "bg-white/10 text-paper" : "text-muted hover:text-paper"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  // Scroll state + scroll progress bar.
  // The progress bar is a plain passive-scroll transform update (no
  // framer spring / rAF physics loop) to keep scrolling cheap on iOS.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock page scroll while the menu is open (prevents iOS scroll chaining
  // to the content behind the overlay).
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const items = [
    { id: "about", label: t.nav.about },
    { id: "stack", label: t.nav.stack },
    { id: "playhome", label: t.nav.playhome },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "journey", label: t.nav.journey },
    { id: "beyond", label: t.nav.beyond },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        ref={barRef}
        className="h-[2px] origin-left bg-gradient-to-r from-violet via-cyan to-violet"
        style={{ transform: "scaleX(0)" }}
      />
      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass border-b border-line" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 md:h-[72px] md:px-8">
          <a href="#home" className="font-display text-xl font-bold tracking-tight text-paper">
            LSO<span className="text-cyan">.</span>
          </a>

          <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
            {items.map((it) => (
              <li key={it.id}>
                <a href={`#${it.id}`} className="transition-colors hover:text-paper">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <LangToggle compact />
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line lg:hidden"
            >
              <span className="h-px w-4 bg-paper" />
              <span className="h-px w-4 bg-paper" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu — PRE-RENDERED (always in the DOM, visibility:hidden
          via .mobile-menu). Opening is a single class toggle, so on slow
          iPhones there is no subtree insertion and no React re-layout of
          the menu content; all items are painted together in the same
          frame (no per-item stagger — delayed animations queued behind a
          busy main thread made items appear seconds apart on iOS). */}
      <div
        className={`mobile-menu ${open ? "is-open" : ""}`}
        inert={open ? undefined : true}
      >
        <div className="absolute inset-0 bg-ink" onClick={() => setOpen(false)} />
        <div className="relative flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-bold text-paper">
              LSO<span className="text-cyan">.</span>
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {[...items, { id: "contact", label: t.nav.contact }].map((it, i) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className="py-2 font-display text-4xl font-bold tracking-tight text-paper/90 transition-colors hover:text-cyan"
              >
                <span className="mr-4 align-super font-mono text-xs text-muted">
                  0{i + 1}
                </span>
                {it.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between">
            <LangToggle />
            <div className="flex gap-3 text-muted">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-cyan"
              >
                <Icon name="github" className="h-5 w-5" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-cyan"
              >
                <Icon name="linkedin" className="h-5 w-5" />
              </a>
              <a href={links.email} aria-label="Email" className="transition-colors hover:text-cyan">
                <Icon name="mail" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
