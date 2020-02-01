import React from "react";

import "./projects.scss";
import { PROJECTS } from "./constants";
import ProjectItem from "./project-item";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="title-stroke">PROJECTS</h2>
      {PROJECTS.map(prj => {
        return (
        <ProjectItem key={prj.name} project={prj} />
      )})}
    </section>
  );
}

export default Projects;
