import { useInView, motion } from "framer-motion";
import styles from "./style.module.scss";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../Rounded";
import Orbit from "../ui/Orbit";
import Link from "next/link";
export default function index() {
  const phrase =
    "Self taught and motivated Web developer.  Have experience as a freelancer.  Have hands-on experience on modern technologies";
  const description = useRef(null);
  const isInView = useInView(description);
  const handleDownload = () => {
    // Code to trigger download
    const fileUrl = "/download/resume-jaskaran.docx"; // Replace with the actual URL of your file
    const fileName = "resume-jaskaran.docx"; // Replace with the desired file name

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      ref={description}
      className="w-full  lg:w-[70%] mx-auto h-auto mt-[20vh] overflow-hidden "
    >
      <div className="flex justify-between flex-wrap ">
        <p className="w-[80%] mx-auto md:w-[50%] h-auto text-[1.5rem] sm:text-[2rem] gap-2 items-center md:mt-20">
          {phrase.split("  ").map((word, index) => {
            return (
              <span
                key={index}
                className="relative overflow-hidden inline-flex"
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>

        <div
          data-scroll
          data-scroll-speed="0.6"
          className="w-full md:w-[50%] h-auto mx-auto"
        >
          <Orbit />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-16 pb-10 mt-10">
        <Link href="/project">
          <Rounded className="text-[1.5rem] relative  border-[#323031] border-[2px] rounded-full font-semibold py-2 px-8 flex justify-center items-center">
            <p className="z-10 relative">Projects</p>
          </Rounded>
        </Link>
        <Rounded
          onClick={handleDownload}
          className="text-[1.5rem] relative  border-[#323031] border-[2px] rounded-full font-semibold py-2 px-8 flex justify-center items-center"
        >
          <p className="z-10 relative">Resume</p>
        </Rounded>
      </div>
      <hr className="w-[80%] mx-auto mt-28 bg-slate-900 " />
    </div>
  );
}
