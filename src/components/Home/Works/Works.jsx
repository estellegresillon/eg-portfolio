import React from "react";
import { Link } from "react-router-dom";

import "./Works.scss";
import Button from "components/common/Button";

const Works = () => (
  <div id="Works">
    <div className="column-container">
      <div className="pro-left column">
        <img src="diamond-small.png" alt="pro" className="diamond" />
        <h3>&gt; Freelance missions</h3>
        <p>
          Take a look at my CV and a detailed timeline of my former missions
        </p>
        <Link to="/career">
          <Button label="check it out" />
        </Link>
      </div>
    </div>
    <div className="column-container">
      <div className="perso-right column">
        <img src="folder-small.png" alt="perso" className="folder" />
        <h3>&gt; Personal projects</h3>
        <p>
          Code & UI Challenges, onepages, custom hooks, design & front-end
          resources...
        </p>
        <Link to="/projects">
          <Button label="check it out" />
        </Link>
      </div>
    </div>
    <img
      className="medium-stripes"
      src="stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
    <img
      className="small-stripes"
      src="stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />{" "}
    <div className="dot pink-dot-top" />
    <div className="dot pink-dot-bottom" />
    <div className="dot blue-dot-top" />
    <div className="dot blue-dot-medium" />
    <div className="dot dark-blue-dot-bottom" />
  </div>
);

export default Works;
