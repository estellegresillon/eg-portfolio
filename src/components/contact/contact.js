import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { Waypoint } from "react-waypoint";

import "./contact.scss";
import { printLetterByLetter } from "./helpers";
import { FUNNY_MESSAGES_ARRAY } from "./constants";

const Contact = ({ showLightTheme, t }) => {
  const contactContainer = useRef(null);
  const textContainer = useRef(null);
  const circleTop = useRef(null);
  const circleBottom = useRef(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-on");
  };

  const moveCircles = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    circleTop.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.2},${distanceFromMiddleY * -0.3},0,1)`;
    circleBottom.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * 0.2},${distanceFromMiddleY * -0.3},0,1)`;
  }

  useEffect(() => {
    printLetterByLetter(textContainer.current, FUNNY_MESSAGES_ARRAY[0]);
    return () => printLetterByLetter(null, null);
  }, []);

  useEffect(() => {
    const contact = contactContainer.current;
    contact.addEventListener("mousemove", moveCircles, false);
    return () => contact.removeEventListener("mousemove", moveCircles, false);
  }, []);

  return (
    <section 
      id="contact"
      style={{ background: showLightTheme ? "linear-gradient(0deg, rgb(78, 214, 255) 0%, rgb(72, 185, 239) 100%)" : "linear-gradient(0deg, rgb(10, 12, 19) 0%, rgb(21, 25, 43) 100%)" }}
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
                <a href="mailto:estelle.gresillon@gmail.com" title="Mail link">
                  estelle.gresillon@gmail.com
                </a>
              </div>
            </div>
            <p className="disponibility"><span aria-label="Emoji businesswoman" role="img">👩‍💼</span> {t('contact.availability')}</p>
          </div>

          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/estellegresillon/"
              aria-label="LinkedIn link"
            >
              <i aria-hidden="true" className="fab fa-linkedin" />
            </a>
            <a 
              href="https://dribbble.com/estellegresillon"
              aria-label="Dribbble link"
            >
              <i aria-hidden="true" className="fab fa-dribbble" />
            </a>
            <a 
              href="https://github.com/estellegresillon"
              aria-label="GitHub link"
            >
              <i aria-hidden="true" className="fab fa-github-alt" />
            </a>
            <a 
              href="mailto:estelle.gresillon@gmail.com"
              aria-label="Mail link"
            >
              <i aria-hidden="true" className="far fa-paper-plane" />
            </a>
          </div>
        </div>
      </Waypoint>

      <div className="circle circle-top" ref={circleTop} />
      <div className="circle circle-bottom" ref={circleBottom} />
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(Contact));
