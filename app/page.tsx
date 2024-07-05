"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Animation from "./_components/Animation";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";
import Preloader from "./_components/Preloader";
import Description from "./_components/Description";
import Projects from "./_components/Projects";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []); // Add an empty dependency array to avoid running the effect on every render

  return (
    <div className="w-full min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div
        className="bg-[url('/bghero.jpg')]"
        style={{ filter: "brightness(100%)" }}
      >
        <Hero />
        <Description />
      </div>
      <Skills />
      <div className="bg-[#f1faee]">
        <Projects />
      </div>
      <Animation />
      <Footer />
    </div>
  );
};

export default page;
