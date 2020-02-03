import React, { useRef } from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next'
import { Waypoint } from "react-waypoint";

import "./about.scss";

const About = ({ showLightTheme, t }) => {
  const aboutContainer = useRef(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  return (
    <section 
      className="about"
      style={{ 
        color: showLightTheme ? "#0e0e0e" : "#fff",
        background: showLightTheme ? "#fff6f6" : "#ef3d3d"
      }}
    >
      <Waypoint
        onEnter={() => handleWaypointEnter(aboutContainer.current)}
        onLeave={() => handleWaypointLeave(aboutContainer.current)}
      >
        <div className="about-container" ref={aboutContainer}>
          <div className="about-column presentation">
            <p><span className="intro">Hello</span>, {t("about.intro")}</p>
            <p>{t("about.first-paragraph")}</p>
            <p>{t("about.second-paragraph")}</p>
          </div>
          <div className="about-column skills">
            <h5><span aria-label="emoji-worker" role="img">💻</span>{t("about.dev-title")}</h5>
            <ul>
              <li className="bolder">React.js / Redux / Nextjs / Context React</li>
              <li>{t("about.dev-first")}</li>
              <li>{t("about.dev-second")}</li>
              <li>{t("about.dev-third")}</li>
            </ul>

            <h5><span aria-label="emoji-worker" role="img">🎨</span> DESIGN UX/UI</h5>
            <ul>
              <li className="bolder">Sketch / Adobe / Invision / Zeplin</li>
              <li>{t("about.design-first")}</li>
              <li>{t("about.design-second")}</li>
              <li>{t("about.design-third")}</li>
            </ul>
          </div>
        </div>
      </Waypoint>
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(About));
