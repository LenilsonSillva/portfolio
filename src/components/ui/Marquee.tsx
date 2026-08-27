"use client";

import { useLang } from "../providers/LanguageContext";

export default function Marquee() {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/40 py-4">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap pr-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm text-muted">
            {item}
            <span className="text-cyan/70">✦</span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent"
      />
    </div>
  );
}
