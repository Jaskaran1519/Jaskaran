"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  isMain?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Eazweb.com",
    role: "Fullstack Web Developer",
    period: "Oct 2023 - May 2026",
    isMain: true,
    description: [
      "Led development of high-performance web applications using Next.js and modern technologies.",
      "Collaborated with clients to deliver tailored digital solutions in a fast-paced agency environment.",
      "Optimized site performance and SEO across multiple production projects."
    ],
  },
  {
    company: "Siddh.ai",
    role: "Contract Software Engineer",
    period: "Jun 2025 - Sep 2025",
    description: [
      "Designed and managed data pipelines to process millions of rows of scraped legal data.",
      "Implemented post-processing logic to extract meaningful insights from Indian Supreme Court and High Court records.",
      "Analyzed judge and lawyer histories to provide accurate legal intelligence."
    ],
  },
  {
    company: "Buttercut.ai",
    role: "Contract Developer",
    period: "Oct 2025 - Nov 2025",
    description: [
      "Contributed to the development of AI-driven features for the startup's core platform.",
      "Worked on frontend components and state management using React/Next.js."
    ],
  },
  {
    company: "RisingAhead",
    role: "Contract Fullstack Developer",
    period: "Nov 2025 - Feb 2026",
    description: [
      "Developed and maintained fullstack features during a critical growth phase.",
      "Enhanced user experience through responsive design and interactive UI components."
    ],
  },
];

const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main drawing line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Animate cards
      const cards = gsap.utils.toArray(".timeline-card");
      cards.forEach((card: any, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            y: 20
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-[#f1faee] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-black">
          My Journey
        </h2>

        <div ref={triggerRef} className="relative">
          {/* The Central Spine */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block">
            <div
              ref={lineRef}
              className="w-full h-full bg-black origin-top scale-y-0"
            />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-card relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot on the spine */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-4 border-white z-10 hidden md:block" />

                <div className="w-full md:w-[45%] bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black">{exp.company}</h3>
                      <p className="text-gray-600 font-semibold">{exp.role}</p>
                    </div>
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="mr-2 text-black mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
