"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../../_components/ui/Lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-semibold tracking-wide text-transparent md:text-7xl"
      >
        Some of my work <br />{" "}
        <span className="font-medium text-3xl"> ( Solo Projects )</span>
      </motion.h1>
    </LampContainer>
  );
}

export default LampDemo;
