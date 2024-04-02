"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Animation from "./_components/Animation";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className="bg-gray-200 backdrop-blur-md w-full min-h-screen">
      <div>
        <Animation />
      </div>
    </div>
  );
};

export default page;
