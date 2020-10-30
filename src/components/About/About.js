import React from "react";

import "./About.scss";

const About = () => (
  <div id="About-Page">
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
      <div className="intro">
        I am Estelle, a front-end developer and a designer. <br />
        <br />
        With a passion for problem solving and design, my goal is to create
        websites and apps with{" "}
        <strong>
          a clean code, high quality UI and a compelling user experience
        </strong>
        .
        <br />
        <br />
        Being both a coder and a designer, I can bring a comprehensive outlook
        to your product. <strong>I code thinking about the design</strong>, and{" "}
        <strong>
          I can provide in-depth design guidance, with an understanding of the
          feasibility of the tech side
        </strong>
        .
        <br />
        <br />
        Always yearning to achieve more, I love participating in new projects,
        both professionally and personally. Feel free to contact me as I'd love
        to hear about your project and engage in new challenges !
      </div>
    </div>
  </div>
);

export default About;
