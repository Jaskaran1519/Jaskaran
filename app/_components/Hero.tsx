import React, { useState } from "react";
import { animate, easeInOut, motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Jiggle from "./Jiggle";
import { Audiowide, Patrick_Hand } from "next/font/google";

const headings = Audiowide({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <div className="w-[90%] mx-auto h-auto overflow-hidden ">
      <div className="mt-[35vh] md:mt-[30vh] xl:mt-[40vh] w-full relative mx-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[80%] md:w-[70%]">
          <motion.div
            className={`${headings.className} relative text-[3.2rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[9rem] leading-none   `}
          >
            <motion.h1
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 2.5 },
              }}
            >
              Web
            </motion.h1>
            <motion.h1
              className="pl-[10vw] -pt-4 overflow-hidden"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 2.5 },
              }}
            >
              Developer
            </motion.h1>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 30, transition: { duration: 1, delay: 2.5 } }}
              className="absolute left-1/2 top-0 -translate-x-1/2 -z-20 w-auto h-[20vh]"
            >
              <Image src="/123.jpg" width={150} height={150} alt="/" />
            </motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -30, transition: { duration: 1, delay: 2.5 } }}
              className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-auto h-[20vh]"
            >
              <Image src="/456.jpg" width={150} height={150} alt="/" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-wrap h-auto mt-[65vh]">
        <div className="w-[30%] h-auto flex justify-center mt-10">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="relative hidden md:flex"
          >
            <Jiggle>
              <MoveDown size={100} className="text-black" />
            </Jiggle>
          </motion.div>
        </div>
        <div className="w-full md:w-[25%] h-auto text-[1.5rem] text-black font-semibold flex justify-center items-end   mt-10">
          <p>Fullstack Nextjs Developer with freelance experience</p>
        </div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="w-full md:w-[45%] text-[4rem] lg:text-[5rem] relative text-black pb-5 font-semibold text-right   "
          style={{ lineHeight: "0.8" }}
        >
          {"Jaskaran Singh".split("").map((item, index) => (
            <motion.span key={index} className="">
              {item === " " ? <br /> : item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
