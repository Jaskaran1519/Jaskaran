"use client";
import React, { useRef } from "react";
import Pic1 from "../../../public/images/1.jpg";
import Pic2 from "../../../public/images/2.jpg";
import Pic3 from "../../../public/images/3.jpeg";
import Pic4 from "../../../public/images/4.jpg";
import Pic5 from "../../../public/images/5.jpg";
import Pic6 from "../../../public/images/6.jpg";
import Pic7 from "../../../public/images/7.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const picture: any[] = [
    {
      src: Pic1,
      scale: scale6,
    },
    {
      src: Pic2,
      scale: scale8,
    },
    {
      src: Pic3,
      scale: scale9,
    },
    {
      src: Pic4,
      scale: scale6,
    },
    {
      src: Pic5,
      scale: scale8,
    },
    {
      src: Pic6,
      scale: scale6,
    },
    {
      src: Pic7,
      scale: scale4,
    },
  ];

  return (
    <div>
      <div className="h-[50vh] bg-black"></div>
      <div ref={container} className="h-[300vh] relative ">
        <div className="sticky top-0 h-[100vh] bg-black overflow-hidden">
          {picture.map(({ src, scale }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className="w-full h-full absolute top-0 flex justify-center items-center element"
              >
                <div className="w-[25vw] h-[25vh] relative imagecontainer">
                  <Image src={src} fill placeholder="blur" alt="/" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
