"use client";
import React from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="flex justify-center items-center mt-[40vh] flex-wrap gap-9">
        <h1 className="text-[2rem]">
          Click hee for moj masti &#128166; &#128166; &#128166;
        </h1>
        <Link href="/project" className="px-4 py-2 bg-green-500 rounded-md">
          Click here bro
        </Link>
      </div>
    </div>
  );
};

export default page;
