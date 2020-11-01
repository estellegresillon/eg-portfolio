import React from "react";

import "./ProjectSectionMobile.scss";
import { PROJECTS } from "utils/constants";

const ProjectSectionMobile = () => (
  <div id="Project-Section-Mobile">
    {PROJECTS.map((project, i) => {
      return (
        <section key={project.img} className="project-item">
          <div className="circle-index-wrapper">
            <div className="circle-index">{i + 1}</div>
          </div>

          <div className="column column-text">
            <div className="project-sector">
              {project.sector} - Paris, France
            </div>
            <div className="project-title">
              {project.name}
              {project.isFreelance && (
                <>
                  <span> - </span>
                  <div className="freelance-badge">Freelance</div>
                </>
              )}
            </div>
            <div className="project-date">{project.date}</div>
            <ul className="project-description">
              {project.description.map((item) => (
                <li key={item} className="description-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    })}
  </div>
);

export default ProjectSectionMobile;
