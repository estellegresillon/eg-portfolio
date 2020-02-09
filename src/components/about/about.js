import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next'
import { Waypoint } from "react-waypoint";

import "./about.scss";

const About = ({ showLightTheme, t }) => {
  const aboutContainer = useRef(null);
  const leftColumn = useRef(null);
  const rightColumn = useRef(null);
  const circleBottom = useRef(null);

  const handleWaypointEnterLeft = ref => {
    ref.classList.add("transition-about-left");
  };

  const handleWaypointEnterRight = ref => {
    ref.classList.add("transition-about-right");
  };

  const moveElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    leftColumn.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000006},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.09},${distanceFromMiddleY * -0.09},0,1)`;
    circleBottom.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * 0.1},${distanceFromMiddleY * -0.1},0,1)`;
  }

  useEffect(() => {
    const about = aboutContainer.current;
    about.addEventListener("mousemove", moveElements, false);
    return () => about.removeEventListener("mousemove", moveElements, false);
  }, []);

  return (
    <section 
      id="about"
      style={{ background: showLightTheme ? "#47b9ef" : "#15192b" }}
    >
      <div className="about-container" ref={aboutContainer}>
        <Waypoint
          onEnter={() => handleWaypointEnterLeft(leftColumn.current)}
        >
          <div className="about-column presentation" ref={leftColumn}>
            <p><span className="intro">Hello</span>, {t("about.intro")}</p>
            <p>{t("about.first-paragraph")}</p>
            <p>{t("about.second-paragraph")}</p>
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => handleWaypointEnterRight(rightColumn.current)}
        >
          <div className="about-column skills" ref={rightColumn}>
            <h5><span aria-label="emoji-worker" role="img">💻</span>{t("about.dev-title")}</h5>
            <ul>
              <li className="bolder">React.js / Redux / Nextjs / Context React</li>
              <li>{t("about.dev-first")}</li>
              <li>{t("about.dev-second")}</li>
              <li>{t("about.dev-third")}</li>
            </ul>

            <h5><span aria-label="emoji-worker" role="img">🎨</span> UI DESIGN</h5>
            <ul>
              <li className="bolder">Sketch / Adobe / Invision / Zeplin</li>
              <li>{t("about.design-first")}</li>
              <li>{t("about.design-second")}</li>
              <li>{t("about.design-third")}</li>
            </ul>
          </div>
        </Waypoint>
      </div>

      <div className="circle circle-bottom" ref={circleBottom} />
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(About));
