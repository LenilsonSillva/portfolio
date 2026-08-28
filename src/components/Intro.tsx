"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { useReducedMotion } from "framer-motion";
import { useLang } from "./providers/LanguageContext";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

type Phase = "boot" | "name";

export default function Intro({ onDone }: { onDone: () => void }) {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("boot");
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const [pct, setPct] = useState(0);
  const doneRef = useRef(false);

  const total = reduced ? 1500 : 4050;

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

  // Wall-clock-based counter (not rAF, not tick-count based).
  //
  // The previous version added a fixed step per setInterval tick, so on
  // iPhones whose timers run slower under load the counter was still
  // ~83% when the finish fired. Deriving pct from elapsed real time makes
  // it reach 100 exactly at `total` ms regardless of tick frequency.
  //
  // finish() is called in the SAME tick that paints "100%": the exit
  // transition and the hero entrance therefore start in the exact frame
  // the counter completes — no "stuck at 100%" pause. The 4050ms timeout
  // in the phase effect remains as a safety net if this interval dies.
  useEffect(() => {
    const tick = 40;
    const start = performance.now();
    const lastInt = { v: -1 };
    const id = setInterval(() => {
      const p = Math.min(100, ((performance.now() - start) / total) * 100);
      const disp = Math.floor(p);
      // Only re-render when the displayed integer changes.
      if (disp !== lastInt.v) {
        lastInt.v = disp;
        setPct(disp);
      }
      if (p >= 100) {
        clearInterval(id);
        finishRef.current();
      }
    }, tick);
    return () => clearInterval(id);
  }, [total]);

  // Unmount after the (short) CSS exit animation finishes.
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setGone(true), 750);
    return () => clearTimeout(t);
  }, [done]);

  if (gone) return null;

  const display = String(Math.floor(pct)).padStart(2, "0");

  return (
    <div
      className={`intro-safety fixed inset-0 z-[100] bg-ink ${done ? "intro-exit" : ""}`}
      onClick={() => finishRef.current()}
      role="presentation"
    >
      {phase === "boot" ? (
        <div className="intro-fade-in absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          <div className="font-mono text-[8px] leading-relaxed min-[340px]:text-[9px] min-[380px]:text-[10px] sm:text-[12px] md:text-[13px]">
            {t.intro.terminal.map((line, i) => (
              <p
                key={i}
                className={`intro-line ${i % 2 === 0 ? "text-paper" : "text-muted"}`}
                style={d(0.2 + i * 0.24)}
              >
                {line}
              </p>
            ))}
            <span className="animate-blink ml-1.5 inline-block h-4 w-2.5 bg-cyan align-middle" />
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.3em] text-muted md:block">
            <span>{t.intro.skip}</span>
          </div>
        </div>
      ) : (
        <div className="intro-fade-in absolute inset-0 flex flex-col p-6 md:p-10">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="overflow-hidden">
              <h1 className="font-display font-bold tracking-tight text-paper text-[clamp(18px,8vw,72px)]">
                {t.intro.name.split("").map((ch, i) => (
                  <span key={i} className="intro-char" style={d(0.15 + i * 0.045)}>
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </h1>
            </div>
            <p
              className="intro-fade-in mt-7 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-muted min-[440px]:text-[11px] min-[440px]:tracking-[0.45em] md:text-xs"
              style={d(1.0)}
            >
              {t.intro.role}
            </p>
          </div>
        </div>
      )}

      {/* persistent progress */}
      <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between md:bottom-10 md:right-10 md:left-10">
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.3em] text-muted md:block">
          {t.intro.skip}
        </span>
        <div className="flex items-center gap-4">
          <div className="hidden h-px w-40 overflow-hidden bg-white/10 md:block">
            <div
              className="h-full bg-gradient-to-r from-violet to-cyan"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="font-mono text-sm text-cyan">
            {display}
            <span className="text-muted">%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
