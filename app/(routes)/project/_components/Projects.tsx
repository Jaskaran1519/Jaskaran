"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Comfortaa, Pacifico } from "next/font/google";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import LinearGradient from "../../../_components/magicui/linear-gradient";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["500"],
});

type ProjectProps = {
  title: string;
  description: (string | JSX.Element)[];
  img: string;
  link: string;
  index: number;
  totalProjects: number;
  scrollYProgress: any;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  img,
  link,
  index,
  totalProjects,
  scrollYProgress,
}) => {
  const start = (index - 1) / totalProjects;
  const center = (index - 0.5) / totalProjects;
  const end = index / totalProjects;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(scrollYProgress, [start, end], ["100vh", "-100vh"]);

  const imageScale = useTransform(
    scrollYProgress,
    [start, center, end],
    [0.5, 1, 0.5]
  );

  const textY = useTransform(scrollYProgress, [start, end], ["50vh", "-50vh"]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <Image
            src={img}
            width={800}
            height={800}
            className="opacity-80"
            alt={title}
          />
        </motion.div>
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-black z-20"
        >
          <h2
            className={`${pacifico.className} text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] mb-4`}
          >
            {title}
          </h2>
          <p
            className={`${comfortaa.className} text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] leading-relaxed md:flex px-4`}
          >
            {description.map((item, index) => (
              <div key={index} className="mx-2 flex">
                {item}
                {index < description.length - 1 ? (
                  <div className="mx-2">|</div>
                ) : null}
              </div>
            ))}
          </p>
        </motion.div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-10 right-10 bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-300 z-50"
        >
          <ArrowTopRightIcon className="w-8 h-8" />
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      title: "Sharelit",
      description: ["Next js", "Firebase", "sharelit.vercel.app"],
      img: "/projects/sharelit.webp",
      link: "https://sharelit.vercel.app/",
    },
    {
      title: "Googuessy",
      description: ["MERN", "Gemini AI", "googuessy.pages.dev/"],
      img: "/projects/googuessy.png",
      link: "https://googuessy.pages.dev/",
    },
    {
      title: "Eazweb",
      description: ["Next js", "Framer Motion", "eazweb.in"],
      img: "/projects/eazweb.png",
      link: "https://eazweb.in/",
    },
    {
      title: "Lift Lock",
      description: ["Next js", "MongoDB", "Cloudinary"],
      img: "/projects/liftlock.png",
      link: "https://liftlock.in/",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <LinearGradient />
        {projects.map((project, index) => (
          <Project
            key={`${project.title}-${index}`}
            index={index + 1}
            totalProjects={projects.length}
            scrollYProgress={scrollYProgress}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
