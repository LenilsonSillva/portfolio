"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 50, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 50, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
    >
      <div
        className="h-[500px] w-[500px] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #8b5cf6 0%, #22d3ee 55%, transparent 75%)",
        }}
      />
    </motion.div>
  );
}
