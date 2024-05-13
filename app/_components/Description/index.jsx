import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../Rounded";
import Link from "next/link";
export default function index() {
  const phrase =
    "Helping brands to stand out in the digital era.  Together we will set the new status quo. No  nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div
      ref={description}
      className="flex  overfow-hidden w-[80%] md:w-[70%] mx-auto mt-[20vh]"
    >
      <div className=" flex  relative flex-wrap ">
        <p className="description w-full md:w-[60%] min-w-[50vw] h-auto ">
          {phrase.split("  ").map((word, index) => {
            return (
              <span key={index} className="relative overflow-hidden flex">
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
        {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p> */}
        <div data-scroll data-scroll-speed={0.1} className="">
          <Link href="/about">
            <Rounded className="top-[80%] left-[80%] w-[180px] h-[180px] rounded-full mx-auto bg-[#1C1D20] flex justify-center cursor-pointer items-center text-white ">
              <p>About me</p>
            </Rounded>
          </Link>
        </div>
      </div>
    </div>
  );
}
