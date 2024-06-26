import React from "react";
import Intro from "./_components/Intro";
import Lampeffect from "./_components/Lampeffect";
import Textmove from "./_components/Textmove";
import ProjectsShowcase from "./_components/Projects";

const page = () => {
  return (
    <div>
      <Lampeffect />
      <Textmove />
      <Intro />
      <ProjectsShowcase />
    </div>
  );
};

export default page;
