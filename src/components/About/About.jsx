import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "components/common/Button";
import IntroductionText from "components/common/IntroductionText";
import ProjectSection from "./ProjectSection";
import ProjectSectionMobile from "./ProjectSectionMobile";
import SocialLinks from "components/common/SocialLinks";
import "./About.scss";
import { useWindowSize } from "hooks/useWindowSize";

const About = () => {
  const windowSize = useWindowSize();
  const bigScreen = windowSize.width >= 700;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="About-Page">
      <section className="intro-text">
        <div className="robot-wrapper">
          <img src="robot-small.png" alt="robot" className="robot" />
        </div>
        <IntroductionText />
        <div className="dot pink-dot-top" />
        <div className="dot dark-blue-dot-medium" />
        <div className="dot blue-dot-top" />
        <img
          className="big-stripes"
          src="stripes.svg"
          alt="stripe"
          aria-hidden="true"
        />
        <img
          className="medium-stripes"
          src="stripes.svg"
          alt="stripe"
          aria-hidden="true"
        />
      </section>

      {bigScreen ? <ProjectSection /> : <ProjectSectionMobile />}

      <section className="conclusion">
        <div className="conclusion-links">
          <Link to="/projects">
            <Button label="see my personal work" />
          </Link>
          <Link to="/contact">
            <Button label="contact me" />
          </Link>
        </div>
        <SocialLinks color="#4447b3" />
      </section>
    </div>
  );
};

export default About;
