import React from "react";
import { Link } from "react-router-dom";

import "./About.scss";
import Button from "components/common/Button";
import IntroductionText from "components/common/IntroductionText";

const About = () => (
  <div id="About">
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
    <div className="dot pink-dot-top" />
    <div className="dot pink-dot-bottom" />
    <div className="dot dark-blue-dot-medium" />
    <div className="dot blue-dot-top" />
    <div className="dot blue-dot-medium" />
    <div className="dot dark-blue-dot-bottom" />
    <img src="floppy-small.png" alt="floppy" className="floppy" />
    <img src="bulb-small.png" alt="bulb" className="bulb" />
    <div className="robot-wrapper">
      <img src="robot-small.png" alt="robot" className="robot" />
    </div>
    <div className="about-section">
      <h2>Hey.</h2>
      <img
        className="small-stripes"
        src="stripes.svg"
        alt="stripe"
        aria-hidden="true"
      />
      <IntroductionText />
      <Link to="/career">
        <Button label="take a look at my cv" />
      </Link>
    </div>
  </div>
);

export default About;
