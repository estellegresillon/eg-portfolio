import React, { useState, useEffect } from "react";

import "./Contact.scss";
import SocialLinks from "components/common/SocialLinks";
import { CONTACT_PAGE_WORDS } from "utils/constants";

const Contact = () => {
  const [projectType, setProjectType] = useState(CONTACT_PAGE_WORDS[0]);

  useEffect(() => {
    let count = 0;

    const type = setInterval(function () {
      count++;
      setProjectType(CONTACT_PAGE_WORDS[count % CONTACT_PAGE_WORDS.length]);
    }, 1500);

    return () => clearInterval(type);
  }, []);

  return (
    <div id="Contact-Page">
      <div className="container">
        <h3>&gt; Contact</h3>
        <img
          className="small-stripes"
          src="stripes.svg"
          alt="stripe"
          aria-hidden="true"
        />
        <div className="contact-intro">
          For <span className="project-type">{projectType}</span>
        </div>
        <div className="mail">
          <i className="fas fa-arrow-right" />
          <a href="mailto:estelle.gresillon@gmail.com">
            estelle.gresillon@gmail.com
          </a>
        </div>
        <SocialLinks color="#4447b3" />
      </div>

      <img src="mailboxblue-small.png" className="mailbox" alt="mailbox" />
      <div className="dot red-dot-top" />
      <div className="dot red-dot-bottom" />
      <div className="dot dark-blue-dot-medium" />
      <div className="dot blue-dot-top" />
      <div className="dot blue-dot-medium" />
      <div className="dot dark-blue-dot-bottom" />
      <img
        className="medium-stripes"
        src="stripes.svg"
        alt="stripe"
        aria-hidden="true"
      />
    </div>
  );
};

export default Contact;
