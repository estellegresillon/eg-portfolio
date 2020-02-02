import React from "react";
import { connect } from "react-redux";

import "./projects.scss";
import { PROJECTS } from "./constants";
import ProjectItem from "./project-item";

const Projects = ({ showLightTheme }) => {
  return (
    <section 
      className="projects"
      style={{ 
        color: showLightTheme ? "#0e0e0e" : "#fff",
        background: showLightTheme ? "#fff" : "#0e0e0e"
      }}
    >
      {PROJECTS.map(prj => <ProjectItem key={prj.name} project={prj} />)}
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default connect(mapStateToProps)(Projects);
