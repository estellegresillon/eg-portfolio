import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import { PAGES, BLOG_URL } from "utils/constants";

const Footer = () => (
  <div id="Footer">
    <div className="container">
      <div className="localisation">
        <p>Estelle Grésillon - ReactJs Developer & Designer</p>
        <p>Located in Paris XI</p>
        <p>estelle.gresillon@gmail.com</p>
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
        <a href="https://github.com/estellegresillon" aria-label="GitHub link">
          <i aria-hidden="true" className="fab fa-github-alt" />
        </a>
        <a href="mailto:estelle.gresillon@gmail.com" aria-label="Mail link">
          <i aria-hidden="true" className="far fa-paper-plane" />
        </a>
      </div>
      <div className="links">
        {PAGES.map((page) => {
          if (page.name === "Home") {
            return null;
          }
          return (
            <Link key={page.name} to={page.url}>
              {page.name}
            </Link>
          );
        })}
        <a target="_blank" rel="noopener noreferrer" href={BLOG_URL}>
          Blog
        </a>
        <p className="language-select">EN / FR</p>
      </div>
    </div>
    <div className="terms">
      Copyright Estelle Grésillon © 2020 - Terms of use
    </div>
    <img src="anchor-small.png" className="anchor" alt="anchor" />
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
