import React, { useEffect, useRef } from "react";

import "./contact.scss";
import { printLetterByLetter } from "./helpers";
import { FUNNY_MESSAGES_ARRAY } from "./constants";

const Contact = () => {
  const contactInfos = useRef(null);
  const contactWrapper = useRef(null);
  const textContainer = useRef(null);

  const toggleContactSection = () => {
    const innerHeight = window.innerHeight;
    const distanceFromTop = window.pageYOffset;

    if (distanceFromTop > innerHeight * 4) {
      contactInfos.current.style.opacity = 1;
      contactWrapper.current.style.backgroundColor = "#ef3d3d";
    } else {
      contactInfos.current.style.opacity = 0;
      contactWrapper.current.style.backgroundColor = "black";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleContactSection, false);
    return () => window.removeEventListener("scroll", toggleContactSection, false);
  }, []);

  useEffect(() => {
    printLetterByLetter(textContainer.current, FUNNY_MESSAGES_ARRAY[0]);
    return () => printLetterByLetter(null, null);
  }, []);

  return (
    <section className="contact" ref={contactWrapper}>
      <div className="contact-infos" ref={contactInfos}>
        <div className="text-wrapper">
          <div id="text-container" ref={textContainer} />
        </div>

        <div className="mail-wrapper">
          <img src="profile-pic.jpg" height="100px" width="auto" alt="shiny-uniorn" />
          <div className="column-right">
            <p className="send-email">Send me an e-mail :</p>
            <a href="mailto:estelle.gresillon@gmail.com">estelle.gresillon@gmail.com</a>
          </div>
        </div>
        <p className="disponibility"><span aria-label="emoji-worker" role="img">👩‍💼</span> Available in April 2020 for freelance missions</p>
      </div>
    </section>
  );
}

export default Contact;
