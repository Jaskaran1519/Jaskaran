"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import {
  AlarmClock,
  Atom,
  Banana,
  Bluetooth,
  Brain,
  Camera,
  Chrome,
  DollarSign,
} from "lucide-react";

const words = [
  <AlarmClock size={100} />,
  <Atom size={100} />,
  <Brain size={100} />,
  <Banana size={100} />,
  <Bluetooth size={100} />,
  <Camera size={100} />,
  <Chrome size={100} />,
  <DollarSign size={100} />,
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="w-full h-full flex justify-center items-center fixed z-1 bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          <svg className="absolute top-0 w-full h-[130vh] z-99 ">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
          <motion.p
            className="text-white z-99 text-[4rem]"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <span></span>
            {words[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
}