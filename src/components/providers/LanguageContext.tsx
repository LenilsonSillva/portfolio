"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dicts, type Dict, type Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ls-portfolio-lang";

const VALID: Lang[] = ["en", "pt-BR", "pt-PT"];

/** Detects the best language from the system/browser language. */
function detectLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const code = (navigator.languages?.[0] || navigator.language || "")
    .toLowerCase()
    .replace("_", "-");
  if (code.startsWith("pt-br")) return "pt-BR";
  if (code.startsWith("pt")) return "pt-PT";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start as "en" so the SSR HTML and the first client render match;
  // the real language is applied on mount (the intro screen masks any switch).
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }
    let next: Lang;
    if (saved === "pt") next = "pt-PT"; // legacy value
    else if (saved && VALID.includes(saved as Lang)) next = saved as Lang;
    else next = detectLang();
    setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : lang.toLowerCase();
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

export const LANG_OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "pt-BR", label: "BR" },
  { id: "pt-PT", label: "PT" },
];
