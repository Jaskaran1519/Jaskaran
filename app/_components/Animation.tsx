import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import useDimension from "../useDimension";

const photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];
const Animation = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y: any = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y2: any = useTransform(scrollYProgress, [0, 1], [0, height * 3.2]);
  const y3: any = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y4: any = useTransform(scrollYProgress, [0, 1], [0, height * 4]);
  return (
    <div className="">
      <div className="h-[100vh]"></div>
      <div
        ref={container}
        className="h-[175vh] overflow-hidden bg-black flex flex-row gap-[1vw] p-[2vw] relative  "
      >
        <Column photos={[photos[0], photos[1], photos[2]]} y={y} />
        <Column photos={[photos[3], photos[4], photos[5]]} y={y2} />
        <Column photos={[photos[6], photos[7], photos[8]]} y={y3} />
        <Column photos={[photos[9], photos[10], photos[11]]} y={y4} />
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default Animation;

const Column = ({ photos, y }: { photos: string[]; y: any }) => {
  return (
    <motion.div
      style={{ y }}
      className="w-[25%] h-full flex flex-col gap-[1vw] relative column "
    >
      {photos.map((src, index) => {
        return (
          <div key={index} className="w-full h-full relative">
            <Image
              src={`/photos/${src}`}
              fill
              objectFit="cover"
              alt="/"
              className="rounded-[1vw]"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
