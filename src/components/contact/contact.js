import React, { useEffect, useRef } from "react";

import "./contact.scss";
import { printLetterByLetter } from "./helpers";
import { FUNNY_MESSAGES_ARRAY } from "./constants";

const Contact = () => {
  const contact = useRef(null);
  const textContainer = useRef(null);

  const toggleContactSection = () => {
    const innerHeight = window.innerHeight;
    const distanceFromTop = window.pageYOffset;

    if (distanceFromTop > innerHeight) {
      contact.current.classList.add("transition-on");
    } else {
      contact.current.classList.remove("transition-on");
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
    <section className="contact">
      <div className="contact-infos" ref={contact}>
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
        <p className="disponibility">👩‍💼 Available in April 2020 for freelance missions</p>
      </div>
    </section>
  );
}

export default Contact;
