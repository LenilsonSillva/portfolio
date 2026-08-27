"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "./providers/LanguageContext";
import { Icon } from "./ui/Icons";
import { EASE } from "@/lib/motion";

export default function BackToTop() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          type="button"
          aria-label={t.footer.top}
          title={t.footer.top}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="glass fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line text-paper shadow-lg shadow-black/40 transition-colors hover:border-cyan/60 hover:text-cyan md:bottom-8 md:right-8"
        >
          <Icon name="arrowUp" className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
