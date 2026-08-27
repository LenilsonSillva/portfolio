"use client";

import { useEffect, useState } from "react";
import { LanguageProvider } from "./providers/LanguageContext";
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

  useEffect(() => {
    document.documentElement.style.overflow = introDone ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [introDone]);

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
    </LanguageProvider>
  );
}
