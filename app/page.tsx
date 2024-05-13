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
const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  });

  return (
    <div className="  w-full min-h-screen bg-gray-300 ">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <Skills />
      <Animation />
      <Footer />
    </div>
  );
};

export default page;
