import React, { useRef } from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next'
import { Waypoint } from "react-waypoint";

import "./about.scss";

const About = ({ showLightTheme, t }) => {
  const leftColumn = useRef(null);
  const rightColumn = useRef(null);

  const handleWaypointEnterLeft = ref => {
    ref.classList.add("transition-about-left");
  };

  const handleWaypointEnterRight = ref => {
    ref.classList.add("transition-about-right");
  };

  return (
    <section 
      id="about"
      style={{ background: showLightTheme ? "#47b9ef" : "#15192b" }}
    >
      <div className="about-container">
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
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(About));
