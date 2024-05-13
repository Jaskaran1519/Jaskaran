import React, { useState } from "react";
import { animate, easeInOut, motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Jiggle from "./Jiggle";

const Hero = () => {
  const [project, setProject] = useState(false);
  const [resume, setResume] = useState(false);
  const handleDownload = () => {
    // Code to trigger download
    const fileUrl = "/download/bca syllabus(5).pdf"; // Replace with the actual URL of your file
    const fileName = "example-file.txt"; // Replace with the desired file name

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[90%] mx-auto h-auto overflow-hidden ">
      <div className="w-full h-[10vh] flex justify-between">
        <div className="w-[60vw] hidden md:flex justify-between text-[#323031] font-semibold text-[1.5]">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 2.5 }}
            className="flex justify-center items-center"
          >
            Jaskaran Singh
          </motion.h1>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="flex justify-center items-center"
          >
            Based in Chandigarh
          </motion.h1>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="flex justify-center items-center"
          >
            Modern Website Designer
          </motion.h1>
        </div>
        <div className=" flex justify-center items-center gap-10 text-[2rem] text-[#323031]  mt-4">
          <motion.button
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
            className=" "
          >
            <Jiggle>
              <Link href="/project">Projects</Link>
            </Jiggle>
          </motion.button>

          <motion.button
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
            className=""
            onClick={handleDownload}
          >
            <Jiggle>Resume</Jiggle>
          </motion.button>
        </div>
      </div>
      <div className=" mt-28  ">
        <div className="lg:text-[6rem] xl:text-[8rem] text-[4rem] text-[#323031] font-extrabold flex flex-wrap  leading-tight overflow-hidden mb-5">
          {"Creative Web Developer".split("").map((item, index) => (
            <motion.span
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                delay: 2.5 + index * 0.03,
                ease: easeInOut,
              }}
              key={index}
              className={`overflow-hidden ${index >= 11 ? "break-words" : ""}`}
            >
              {item === " " ? "\u00A0" : item}
            </motion.span>
          ))}
        </div>
        <div className="w-full md:w-[40vw] h-[25vh] m-0">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "25vh" }}
            transition={{ duration: 1, delay: 2.5, ease: [0.65, 0, 0.35, 1] }}
            className="w-full md:w-[40vw] h-[25vh]   border overflow-hidden"
          >
            <Image
              src="/herobg.jpg"
              alt="/"
              width={1000}
              height={1000}
              className="w-full md:w-[40vw] h-[25vh]  z-0 m-0"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-wrap h-auto">
        <div className="w-[30%] h-auto flex justify-center mt-10">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="relative hidden md:flex"
          >
            <Jiggle>
              <MoveDown size={100} className="text-[#323031]" />
            </Jiggle>
          </motion.div>
        </div>
        <div className="w-full md:w-[25%] h-auto text-[1.5rem] text-[#323031] font-medium flex justify-center items-end   mt-10">
          <p>Fullstack Nextjs Developer with freelance experience</p>
        </div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="w-full md:w-[45%] text-[4rem] lg:text-[5rem] relative text-[#323031] pb-5 font-semibold text-right   "
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
