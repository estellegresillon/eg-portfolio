import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next'

import "./detail.scss";
import Header from "../header";
import { PROJECTS } from "../../constants";
import BgElements from "../bg-elements";

const Detail = ({ showLightTheme, t }) => {
  const [project, setProject] = useState({});
  const pageContainer = useRef(null);
  const mouseContainer = useRef(null);
  const projectImage = useRef(null);

  const onCursorMove = (e, cursor, offset) => {
    const relX = e.clientX - offset;
    const relY = e.clientY - offset;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";

    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    projectImage.current.style.backgroundPositionY = `${distanceFromMiddleY * - 0.05}px`;
    projectImage.current.style.backgroundPositionX = `${distanceFromMiddleX * - 0.05}px`;
  };

  useEffect(() => {
    const smallCursor = mouseContainer.current;
    const container = pageContainer.current;
    container.addEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 7) }, false);
    return () => container.removeEventListener("mousemove", () => { onCursorMove() }, false);
  }, []);

  useEffect(() => {
    const projectName = window.location.pathname.substring(1);
    const currentProject = PROJECTS.filter(project => {
      return project.img === projectName;
    });

    setProject(currentProject[0]);
  }, []);

  return (
    <div
      className="detail-page"
      ref={pageContainer}
      style={{ background: showLightTheme ? "#47b9ef" : "#15192b" }}
    >
      <div 
        aria-hidden="true"
        className="cursor-small" 
        ref={mouseContainer}
        style={{ backgroundColor: showLightTheme ? "#1c1c8e" : "#8646ee" }}
      />
      <Header />
      <section id="detail">
        <div className="column detail-left">
          <div className="detail-title title-stroke">{project.name}</div>
          <div className="detail-subtitle title-stroke">{project.description}</div>
          <div className="detail-year">- {project.year} -</div>
          <a href={project.url} target="_blank">
            {t("detail.visit")}
            <span aria-label="External link">
              <i aria-hidden="true" className="fas fa-external-link-alt" />
            </span>
          </a>
        </div>
        <div 
          style={{ backgroundImage: `url(${project.img}.jpg)`}}
          ref={projectImage}
          className="column detail-right" />
      </section>

      <BgElements />
    </div>
  )
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(Detail));
