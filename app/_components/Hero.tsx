import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] flex flex-col justify-between p-6 md:p-10 font-sans bg-[#0e0e0e] text-[#EFEFEF] overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-start text-[0.65rem] md:text-xs font-semibold tracking-[0.2em] z-10">
        <div className="uppercase font-bold text-lg tracking-normal">JSM</div>
        <div className="hidden md:flex gap-10 items-center text-[#888888]">
          <span onClick={() => { // @ts-ignore
            window.lenis ? window.lenis.scrollTo('#work') : document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}} className="hover:text-[#EFEFEF] cursor-pointer transition-colors">WORK</span>
          <span onClick={() => { // @ts-ignore
            window.lenis ? window.lenis.scrollTo('#about') : document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}} className="hover:text-[#EFEFEF] cursor-pointer transition-colors">ABOUT</span>
          <span onClick={() => { // @ts-ignore
            window.lenis ? window.lenis.scrollTo('#contact') : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}} className="hover:text-[#EFEFEF] cursor-pointer transition-colors">CONTACT</span>
        </div>
      </div>

      {/* Main Center */}
      <div className="relative flex flex-col items-center justify-center flex-grow mt-12 w-full">
        <div className="w-full relative flex flex-col items-start">
          <p className="text-[#888888] text-[0.65rem] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-12 z-10 pl-2">
            Software Developer
          </p>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[18vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter md:tracking-[0.05em] text-left whitespace-nowrap text-[#EFEFEF] font-['Bacalar']"
            style={{ transform: "scaleY(1.1)" }}
          >
            Jaskaran<br />Singh
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[#888888] text-[0.65rem] md:text-xs font-bold tracking-[0.2em] hidden md:block">
          SCROLL
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end text-sm md:text-xs font-medium text-[#888888] max-w-full z-10 gap-8 md:gap-0 mt-8 md:mt-0">
        <div className="w-full md:w-[35%] min-w-[250px] leading-relaxed">
          B.Tech from PEC Chandigarh. Experienced in building scalable applications including Multi-Tenant SaaS E-Commerce platforms, real-time multiplayer games, and AR try-on experiences.
        </div>
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex items-center gap-2 border border-[#333] rounded-full px-5 py-2 hover:border-green-800 transition-colors cursor-pointer">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span className="tracking-[0.2em] text-[0.65rem] text-green-500 font-bold uppercase">Available for work</span>
          </div>
          <div className="border border-[#333] rounded-full px-5 py-2">
            <span className="tracking-[0.2em] text-[0.65rem] font-bold uppercase">Chandigarh, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
