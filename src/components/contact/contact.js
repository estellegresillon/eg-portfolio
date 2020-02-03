import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { Waypoint } from "react-waypoint";

import "./contact.scss";
import { printLetterByLetter } from "./helpers";
import { FUNNY_MESSAGES_ARRAY } from "./constants";
import { useWindowSize } from "../../hooks/useWindowSize";

const Contact = ({ showLightTheme, t }) => {
  const windowSize = useWindowSize();
  const contactContainer = useRef(null);
  const textContainer = useRef(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  const moveContainer = () => {
    const containerTop = contactContainer.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    contactContainer.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.8},0,0,1)`;
  }

  useEffect(() => {
    if (windowSize.width > 728) {
      window.addEventListener("scroll", moveContainer, false);
      return () => window.removeEventListener("scroll", moveContainer, false);
    }
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    printLetterByLetter(textContainer.current, FUNNY_MESSAGES_ARRAY[0]);
    return () => printLetterByLetter(null, null);
  }, []);

  return (
    <section 
      id="contact"
      style={{ 
        color: showLightTheme ? "#0e0e0e" : "#fff",
        background: showLightTheme ? "#fff6f6" : "#ef3d3d"
      }}
    >
      <Waypoint
        onEnter={() => handleWaypointEnter(contactContainer.current)}
        onLeave={() => handleWaypointLeave(contactContainer.current)}
      >
        <div className="contact-container" ref={contactContainer}>
          <div className="contact-infos">
            <div aria-hidden="true" className="text-wrapper">
              <div id="text-container" ref={textContainer} />
            </div>

            <div className="mail-wrapper">
              <img src="profile-pic.jpg" height="100px" width="auto" alt="Author portrait" />
              <div className="column-right">
                <p className="send-email">{t('contact.send-mail')}</p>
                <a 
                  href="mailto:estelle.gresillon@gmail.com"
                  title="Mail link"
                  style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
                >estelle.gresillon@gmail.com</a>
              </div>
            </div>
            <p className="disponibility"><span aria-label="Emoji businesswoman" role="img">👩‍💼</span> {t('contact.availability')}</p>
          </div>

          <div className="social-icons">
            <a 
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              href="https://www.linkedin.com/in/estellegresillon/"
              aria-label="LinkedIn link"
            >
              <i aria-hidden="true" className="fab fa-linkedin" />
            </a>
            <a 
              href="https://dribbble.com/estellegresillon"
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              aria-label="Dribbble link"
            >
              <i aria-hidden="true" className="fab fa-dribbble" />
            </a>
            <a 
              href="https://github.com/estellegresillon"
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              aria-label="GitHub link"
            >
              <i aria-hidden="true" className="fab fa-github-alt" />
            </a>
            <a 
              href="mailto:estelle.gresillon@gmail.com"
              style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
              aria-label="Mail link"
            >
              <i aria-hidden="true" className="far fa-paper-plane" />
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

export default withTranslation()(connect(mapStateToProps)(Contact));
