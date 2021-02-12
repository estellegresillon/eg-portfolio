import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Projects.scss";
import { FRONT_END_CHALLENGES, WEBSITES } from "utils/constants";
import SocialLinks from "components/common/SocialLinks";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="Projects">
      <div className="Projects-intro">
        <p>Here are my personal projects and collaborations.</p>
        <p>
          You can find my clients, missions and skills right{" "}
          <Link to="/career">here.</Link>
        </p>
      </div>
      <h1>Websites</h1>
      <div className="challenges-list">
        {WEBSITES.map((challenge, i) => (
          <div key={i} className="challenge-item">
            <div className="counter">
              0{i < 9 && "0"}
              {i + 1}
            </div>
            <div className="content">
              <div className="title">{challenge.name}</div>
              <div className="subtitle">{challenge.subtitle}</div>
            </div>
            <div className="see-more">
              {challenge.component ? (
                <Link to={challenge.link}>
                  <div className="button">SEE PROJECT</div>
                </Link>
              ) : (
                <a
                  href={challenge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="button">SEE PROJECT</div>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <h1 className="front-end">
        <div>Front-End Challenges</div>
        <p className="front-end-note">
          Note : Some of the challenges below are not responsive.
        </p>
      </h1>
      <div className="challenges-list">
        {FRONT_END_CHALLENGES.map((challenge, i) => (
          <div key={i} className="challenge-item">
            <div className="counter">
              0{i < 9 && "0"}
              {i + 1}
            </div>
            <div className="content">
              <div className="title">{challenge.name}</div>
              <div className="subtitle">{challenge.subtitle}</div>
            </div>
            <div className="see-more">
              <Link to={challenge.link}>
                <div className="button">SEE CHALLENGE</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <SocialLinks color="#110b44" />
    </div>
  );
};

export default Projects;
