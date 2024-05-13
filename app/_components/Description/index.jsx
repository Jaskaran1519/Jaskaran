import { useInView, motion } from "framer-motion";
import styles from "./style.module.scss";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

import Orbit from "../ui/Orbit";
export default function index() {
  const phrase =
    "Self taught and motivated Web developer.  Have experience as a freelancer.  Have hands-on experience on modern technologies";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div
      ref={description}
      className="w-full md:w-[70%] mx-auto h-auto mt-[20vh] overflow-hidden"
    >
      <div className="flex justify-between flex-wrap ">
        <p className="w-[80%] mx-auto md:w-[60%] h-auto text-[1.5rem] sm:text-[2rem] gap-2 items-center md:mt-20">
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
          className="w-full md:w-[40%] h-auto mx-auto"
        >
          <Orbit />
        </div>
      </div>
    </div>
  );
}
