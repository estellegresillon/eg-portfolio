import React from "react";
import { connect } from "react-redux";

import "./projects.scss";
import { PROJECTS } from "./constants";
import ProjectItem from "./project-item";

const Projects = ({ showLightTheme }) => {
  return (
    <section 
      id="projects"
      style={{ background: showLightTheme ? "#47b9ef" : "#15192b" }}
    >
      {PROJECTS.map(prj => <ProjectItem key={prj.name} project={prj} />)}
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default connect(mapStateToProps)(Projects);
