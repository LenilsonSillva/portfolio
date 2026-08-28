"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * IntersectionObserver-based reveal.
 *
 * Content is only hidden when JS is alive (html.js-live), so a page with
 * dead/stalled JS always shows its content. The motion itself is pure
 * CSS (compositor-driven), which is far more robust on iOS than
 * rAF-driven transform animations.
 */
export function useInViewRef<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in-view");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("in-view");
          io.disconnect();
        }
      },
      { rootMargin: "-60px 0px", threshold: 0 }
    );
    io.observe(el);
    // Safety net: some browsers miss the initial intersection callback.
    const t = setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
        el.classList.add("in-view");
        io.disconnect();
      }
    }, 2500);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return ref;
}

export function RevealCSS({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useInViewRef<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`io-scope reveal-css ${className}`}
      style={delay ? ({ "--d": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
