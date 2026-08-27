"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useLang } from "./providers/LanguageContext";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

type Phase = "boot" | "name";

export default function Intro({ onDone }: { onDone: () => void }) {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("boot");
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setDone(true);
    onDone();
  }, [onDone]);

  const finishRef = useRef(finish);
  finishRef.current = finish;

  useEffect(() => {
    if (reduced) {
      setPhase("name");
      const a = setTimeout(() => finishRef.current(), 1500);
      return () => clearTimeout(a);
    }
    const t1 = setTimeout(() => setPhase("name"), 1950);
    const t2 = setTimeout(() => finishRef.current(), 4050);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduced]);

  const counter = useMotionValue(0);
  const display = useTransform(counter, (v) => String(Math.round(v)).padStart(2, "0"));

  useEffect(() => {
    const controls = animate(counter, 100, {
      duration: reduced ? 1.5 : 4.05,
      ease: "linear",
    });
    return () => controls.stop();
  }, [counter, reduced]);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink"
      onClick={() => finishRef.current()}
      role="presentation"
    >
      <AnimatePresence onExitComplete={() => setGone(true)}>
        {!done && (
          <motion.div
            key="overlay"
            className="absolute inset-0"
            exit={{ y: "-100%", transition: { duration: 0.85, ease: EASE, delay: 0.05 } }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                className="absolute inset-0 flex flex-col justify-between p-6 md:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
              >
                {phase === "boot" ? (
                  <>
                    <div className="font-mono text-[13px] leading-relaxed">
                      {t.intro.terminal.map((line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.24, duration: 0.3 }}
                          className={i % 2 === 0 ? "text-paper" : "text-muted"}
                        >
                          {line}
                        </motion.p>
                      ))}
                      <span className="animate-blink ml-1.5 inline-block h-4 w-2.5 bg-cyan align-middle" />
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                      <span>{t.intro.skip}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-1 flex-col items-center justify-center">
                    <div className="overflow-hidden">
                      <h1 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl">
                        {t.intro.name.split("").map((ch, i) => (
                          <motion.span
                            key={i}
                            className="inline-block"
                            initial={{ y: "110%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            transition={{
                              delay: 0.15 + i * 0.045,
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            {ch === " " ? "\u00A0" : ch}
                          </motion.span>
                        ))}
                      </h1>
                    </div>
                    <motion.p
                      className="mt-7 text-center font-mono text-[11px] uppercase tracking-[0.45em] text-muted md:text-xs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0, duration: 0.6 }}
                    >
                      {t.intro.role}
                    </motion.p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* persistent progress */}
            <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between md:bottom-10 md:right-10 md:left-10">
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.3em] text-muted md:block">
                {t.intro.skip}
              </span>
              <div className="flex items-center gap-4">
                <div className="hidden h-px w-40 overflow-hidden bg-white/10 md:block">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet to-cyan"
                    style={{ width: display }}
                  />
                </div>
                <span className="font-mono text-sm text-cyan">
                  <motion.span>{display}</motion.span>
                  <span className="text-muted">%</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
