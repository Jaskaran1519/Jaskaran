"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-[40vh]">
        <h1 className="text-[2rem]">Click here for mauj masti 💦 💦💦🤤🤤</h1>
        <Link href="/project">
          <button className="px-4 py-2 rounded-md bg-green-500 text-white font-semibold mt-6">
            Click here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
