import React, { useRef } from "react";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";

import "./about.scss";

const About = ({ showLightTheme }) => {
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
        background: showLightTheme ? "#ffe6e6" : "#ef3d3d"
      }}
    >
      <Waypoint
        onEnter={() => handleWaypointEnter(aboutContainer.current)}
        onLeave={() => handleWaypointLeave(aboutContainer.current)}
      >
        <div className="about-container" ref={aboutContainer}>
          <div className="about-column presentation">
            <p><span className="intro">Hello</span>, je suis développeur front-end et designer.</p>
            <p>
              Passionnée de design et d'interaction, mon objectif est de créer des produits à l'expérience utilisateur unique et au design hautement qualitatif.
              Je me suis spécialisée dans le développement Front-end sur React.js durant diverses expériences sur Paris (magazine, opérateur télécom, site e-commerce) pendant 2 ans, et également via des projets personnels.
            </p>
            <p>Je recherche actuellement à participer à la conception et à la direction artistique de sites vitrines ou d'application desktop (développement from scratch, maintenance évolutive, ou intégration).</p>
          </div>
          <div className="about-column skills">
            <h5><span aria-label="emoji-worker" role="img">💻</span> DÉVELOPPEMENT FRONT-END</h5>
            <ul>
              <li className="bolder">React.js / Redux / Nextjs / Context React</li>
              <li>Développement d'app from scratch / Sites vitrines</li>
              <li>Intégration CSS3 / Responsive design</li>
              <li>Animations CSS et transitions, parallax</li>
            </ul>

            <h5><span aria-label="emoji-worker" role="img">🎨</span> DESIGN</h5>
            <ul>
              <li className="bolder">Sketch / Suite Adobe / Invision / Zeplin</li>
              <li>Design d'interface, prototypage, maquettage</li>
              <li>Conception d'identité/branding de marques</li>
              <li>Design d'interaction, conception de parcours utilisateurs</li>
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

export default connect(mapStateToProps)(About);
