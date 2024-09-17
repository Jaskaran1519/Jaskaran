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

  const textOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const imageY = useTransform(
    scrollYProgress,
    [start, end],
    ["100vh", "-100vh"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [start, center, end],
    [0.5, 1, 0.5]
  );

  return (
    <>
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute top-0 w-full h-screen flex items-center justify-center"
      >
        <div className="text-center text-black bg-background">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="peer absolute bottom-10 left-8 p-5 rounded-full bg-black text-white text-[9rem]">
              <ArrowTopRightIcon className="transition-transform duration-300 peer-hover:rotate-[-90deg]" />
            </button>
          </a>
          <h2
            className={`${pacifico.className} text-[5.5rem] md:text-[12rem] lg:text-[18rem] xl:text-[22rem] mb-4`}
          >
            {title}
          </h2>
          <p
            className={`${comfortaa.className} absolute bottom-10 right-10 text-[1.5rem] md:text-[2rem] text-right leading-tight`}
          >
            {description.map((item, index) => (
              <React.Fragment key={index}>{item}</React.Fragment>
            ))}
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <Image
          src={img}
          width={800}
          height={800}
          className="opacity-80"
          alt={title}
        />
      </motion.div>
    </>
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
      description: [
        "Next js",
        <br key="1" />,
        "Firebase",
        <br key="2" />,
        "Clerk",
      ],
      img: "/projects/sharelit.webp",
      link: "https://sharelit.vercel.app/",
    },
    {
      title: "Quizesty",
      description: [
        "Next js",
        <br key="1" />,
        "Octo AI",
        <br key="2" />,
        "Google Gemini",
      ],
      img: "/projects/quizesty.webp",
      link: "https://quizesty.vercel.app/",
    },
    {
      title: "Eazweb",
      description: ["Next js", <br key="1" />, "Framer Motion"],
      img: "/projects/eazweb.png",
      link: "https://eazweb.in/",
    },
    {
      title: "Felina",
      description: ["Next js ", <br key="1" />, "Firebase"],
      img: "/projects/felina.webp",
      link: "https://felina1519.vercel.app/",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-black bg-background">
        <LinearGradient />
        {projects.map((project, index) => (
          <Project
            key={`${project.title}-${index}`} // Ensure a unique key
            index={index + 1}
            totalProjects={projects.length}
            scrollYProgress={scrollYProgress}
            {...project} // Spread the project properties
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
