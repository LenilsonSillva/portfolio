"use client";

import { useEffect, useState } from "react";
import { LanguageProvider } from "./providers/LanguageContext";
import BackToTop from "./BackToTop";
import CursorGlow from "./CursorGlow";
import Intro from "./Intro";
import Nav from "./Nav";
import About from "./sections/About";
import Beyond from "./sections/Beyond";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Looking from "./sections/Looking";
import Marquee from "./ui/Marquee";
import PlayHome from "./sections/PlayHome";
import Projects from "./sections/Projects";
import StackSection from "./sections/Stack";
import Footer from "./sections/Footer";

export default function Shell() {
  const [introDone, setIntroDone] = useState(false);

  // Safety net: the intro always finishes by itself (~4s). If timers are
  // throttled or the sequence stalls (iOS Safari), never keep the page
  // hidden for longer than 6s.
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = introDone ? "" : "hidden";
    if (introDone) {
      // iOS Safari can stall the repaint after a full-screen fixed overlay
      // is removed while <html> was locked (overflow: hidden) — the page
      // stays "black" until a forced reflow/repaint. Kick it explicitly.
      window.scrollTo(0, 0);
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        void document.body.offsetHeight;
        document.body.style.willChange = "transform";
        raf2 = requestAnimationFrame(() => {
          document.body.style.willChange = "";
        });
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }
  }, [introDone]);

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="noise-layer" aria-hidden />
      <CursorGlow />
      <Intro onDone={() => setIntroDone(true)} />
      <Nav />
      <main className="relative z-10">
        <Hero introDone={introDone} />
        <Marquee />
        <About />
        <StackSection />
        <PlayHome />
        <Projects />
        <Experience />
        <Education />
        <Journey />
        <Beyond />
        <Looking />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
}
