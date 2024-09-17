"use client";
import React, { useRef } from "react";
import Pic1 from "../../../../public/images/1.webp";
import Pic2 from "../../../../public/images/2.webp";
import Pic3 from "../../../../public/images/3.webp";
import Pic4 from "../../../../public/images/4.webp";
import Pic5 from "../../../../public/images/5.webp";
import Pic6 from "../../../../public/images/6.webp";
import Pic7 from "../../../../public/images/7b.webp";
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
      <div ref={container} className="h-[300vh] relative w-full mt-0 pt-0 ">
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
