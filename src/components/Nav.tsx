"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useLang } from "./providers/LanguageContext";
import { Icon } from "./ui/Icons";
import { links } from "@/lib/data";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <motion.div
        style={{ scaleX: progress }}
        className="h-[2px] origin-left bg-gradient-to-r from-violet via-cyan to-violet"
      />
      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass border-b border-line" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
          <a href="#home" className="font-display text-xl font-bold tracking-tight text-paper">
            LS<span className="text-cyan">.</span>
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

          <div className="flex items-center gap-3">
            <div className="hidden items-center rounded-full border border-line p-0.5 font-mono text-[11px] sm:flex">
              {(["en", "pt"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
                    lang === l ? "bg-white/10 text-paper" : "text-muted hover:text-paper"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-paper/90 transition-all hover:border-cyan/60 hover:bg-cyan/5 md:inline-flex"
            >
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.nav.open}
            </a>

            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line lg:hidden"
            >
              <span className="h-px w-4 bg-paper" />
              <span className="h-px w-4 bg-paper" />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold text-paper">
                  LS<span className="text-cyan">.</span>
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
                  <motion.a
                    key={it.id}
                    href={`#${it.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="py-2 font-display text-4xl font-bold tracking-tight text-paper/90 transition-colors hover:text-cyan"
                  >
                    <span className="mr-4 align-super font-mono text-xs text-muted">
                      0{i + 1}
                    </span>
                    {it.label}
                  </motion.a>
                ))}
              </nav>

              <div className="flex items-center justify-between">
                <div className="flex items-center rounded-full border border-line p-0.5 font-mono text-[11px]">
                  {(["en", "pt"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`rounded-full px-3 py-1.5 uppercase tracking-wider transition-colors ${
                        lang === l ? "bg-white/10 text-paper" : "text-muted"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3 text-muted">
                  <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-cyan">
                    <Icon name="github" className="h-5 w-5" />
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-cyan">
                    <Icon name="linkedin" className="h-5 w-5" />
                  </a>
                  <a href={links.email} aria-label="Email" className="transition-colors hover:text-cyan">
                    <Icon name="mail" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
