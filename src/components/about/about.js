import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next'
import { Waypoint } from "react-waypoint";

import "./about.scss";
import { useWindowSize } from "../../hooks/useWindowSize";

const About = ({ showLightTheme, t }) => {
  const windowSize = useWindowSize();
  const aboutContainer = useRef(null);
  const leftColumn = useRef(null);
  const rightColumn = useRef(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  const moveColumns = () => {
    const containerTop = aboutContainer.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    leftColumn.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.2},0,0,1)`;
    rightColumn.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.2},0,0,1)`;
  }

  useEffect(() => {
    if (windowSize.width > 728) {
      window.addEventListener("scroll", moveColumns, false);
      return () => window.removeEventListener("scroll", moveColumns, false);
    }
  // eslint-disable-next-line
  }, []);

  return (
    <section 
      id="about"
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
          <div className="about-column presentation" ref={leftColumn}>
            <p><span className="intro">Hello</span>, {t("about.intro")}</p>
            <p>{t("about.first-paragraph")}</p>
            <p>{t("about.second-paragraph")}</p>
          </div>
          <div className="about-column skills" ref={rightColumn}>
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
