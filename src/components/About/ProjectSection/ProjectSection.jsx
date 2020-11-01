import React from "react";

import "./ProjectSection.scss";
import { PROJECTS } from "utils/constants";

const ProjectSection = () => (
  <div id="Project-Section">
    {PROJECTS.map((project, i) => {
      const isEven = i % 2 === 0;

      return (
        <section
          key={project.img}
          style={{ flexDirection: isEven ? "row" : "row-reverse" }}
          className="project-item"
        >
          <div className="column column-img">
            <div className="img-wrapper">
              <img
                src={`/${project.img}-small.png`}
                alt={project.name}
                className={project.img}
              />
            </div>
          </div>
          <div className="timeline">
            <div className="start-line line" />
            <div className="circle-index-wrapper">
              <div className="circle-index">{i + 1}</div>
            </div>
            <div className="end-line line" />
          </div>
          <div
            className="column column-text"
            style={{ alignItems: isEven ? "flex-start" : "flex-end" }}
          >
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
            <ul
              className="project-description"
              style={{ textAlign: isEven ? "left" : "right" }}
            >
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

export default ProjectSection;
