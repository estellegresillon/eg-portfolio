import React from "react";

import "./Skills.scss";
import { CODE_SKILLS, DESIGN_SKILLS } from "./utils";

const Skills = () => (
  <div id="Skills">
    <img
      className="small-stripes"
      src="stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
    <div className="dot white-dot-medium-top" />
    <div className="dot white-dot-medium" />
    <div className="dot white-dot-left" />
    <div className="dot white-dot-right" />
    <div className="circle-hole" />
    <div className="title">&gt; Skills</div>
    <div className="code-left column">
      <h3>_Code</h3>
      <div className="code-skills-list">
        <img src="computer.png" className="computer" alt="computer" />
        {CODE_SKILLS.map((skill) => (
          <div className="skill" key={skill.label}>
            <div className="icon-wrapper">
              <i className={skill.icon} />
            </div>
            <div>{skill.label}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="design-right column">
      <h3>_Design</h3>
      <div className="design-skills-list">
        <img src="paint.png" className="paint" alt="paint" />
        {DESIGN_SKILLS.map((skill) => (
          <div className="skill" key={skill.label}>
            <div className="icon-wrapper">
              <i className={skill.icon} />
            </div>
            <div>{skill.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
