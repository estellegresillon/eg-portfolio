import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";

import "./contact.scss";
import { printLetterByLetter } from "./helpers";
import { FUNNY_MESSAGES_ARRAY } from "./constants";

const Contact = ({ showLightTheme }) => {
  const contactContainer = useRef(null);
  const textContainer = useRef(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  useEffect(() => {
    printLetterByLetter(textContainer.current, FUNNY_MESSAGES_ARRAY[0]);
    return () => printLetterByLetter(null, null);
  }, []);

  return (
    <section 
      className="contact"
      style={{ 
        color: showLightTheme ? "#0e0e0e" : "#fff",
        background: showLightTheme ? "#ffe6e6" : "#ef3d3d"
      }}
    >
      <Waypoint
        onEnter={() => handleWaypointEnter(contactContainer.current)}
        onLeave={() => handleWaypointLeave(contactContainer.current)}
      >
        <div className="contact-container" ref={contactContainer}>
          <div className="contact-infos">
            <div className="text-wrapper">
              <div id="text-container" ref={textContainer} />
            </div>

            <div className="mail-wrapper">
              <img src="profile-pic.jpg" height="100px" width="auto" alt="shiny-uniorn" />
              <div className="column-right">
                <p className="send-email">Envoyez-moi un e-mail :</p>
                <a 
                  href="mailto:estelle.gresillon@gmail.com"
                  alt="mail"
                  style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
                >estelle.gresillon@gmail.com</a>
              </div>
            </div>
            <p className="disponibility"><span aria-label="emoji-worker" role="img">👩‍💼</span> Disponible en Avril 2020 pour des missions freelance</p>
          </div>

          <div className="social-icons">
            <a 
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              href="https://www.linkedin.com/in/estellegresillon/"
              alt="linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a 
              href="https://dribbble.com/estellegresillon"
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              alt="dribbble"
            >
              <i className="fab fa-dribbble" />
            </a>
            <a 
              href="https://github.com/estellegresillon"
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              alt="github"
            >
              <i className="fab fa-github-alt" />
            </a>
            <a 
              href="mailto:estelle.gresillon@gmail.com"
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              alt="mail"
            >
              <i className="far fa-paper-plane" />
            </a>
          </div>
        </div>
      </Waypoint>
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default connect(mapStateToProps)(Contact);
