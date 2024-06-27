import React from "react";
import Intro from "./_components/Intro";
import Lampeffect from "./_components/Lampeffect";
import Textmove from "./_components/Textmove";
import ProjectsShowcase from "./_components/Projects";
import Footer from "@/app/_components/Footer";

const page = () => {
  return (
    <div>
      <Lampeffect />
      <Textmove />
      <Intro />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
};

export default page;
