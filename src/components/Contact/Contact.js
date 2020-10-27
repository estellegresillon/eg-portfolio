import React from "react";

import "./Contact.scss";
import Button from "components/common/Button";

const Contact = () => (
  <div id="Contact-Page">
    <div className="container">
      <h3>&gt; Contact</h3>
      <img
        className="small-stripes"
        src="stripes.svg"
        alt="stripe"
        aria-hidden="true"
      />
      <p>
        For any business inquiries, questions, project proposal or
        suggestions...
      </p>
      <Button label="...it's this way" />
    </div>
    <img src="mailboxblue-small.png" className="mailbox-1" alt="mailbox" />
    <div className="dot red-dot-top" />
    <div className="dot red-dot-bottom" />
    <div className="dot dark-blue-dot-medium" />
    <div className="dot blue-dot-top" />
    <div className="dot blue-dot-medium" />
    <div className="dot dark-blue-dot-bottom" />
    <img
      className="big-stripes"
      src="stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
    <img
      className="medium-stripes"
      src="stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
  </div>
);

export default Contact;
