import React from "react";

import "./Footer.scss";

const Footer = () => (
  <div id="Footer">
    <div className="container">
      <div className="localisation">
        <p>Estelle Grésillon - ReactJs Developer & Designer</p>
        <p>Located in Paris XI</p>
        <p>estelle.gresillon@gmail.com</p>
      </div>
      <div className="links">
        <p>About</p>
        <p>CV</p>
        <p>Personal Projects</p>
        <p>Code & Design Resources</p>
        <p>Contact</p>
      </div>
    </div>
    <div className="terms">
      Copyright Estelle Grésillon © 2020 - Terms of use
    </div>
    <img src="anchor.png" className="anchor" alt="anchor" />
    <img
      className="small-stripes"
      src="white_stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
    <img
      className="medium-stripes"
      src="white_stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
  </div>
);

export default Footer;
