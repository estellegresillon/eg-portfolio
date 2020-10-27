import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import { PAGES } from "../../../constants";

const Footer = () => (
  <div id="Footer">
    <div className="container">
      <div className="localisation">
        <p>Estelle Grésillon - ReactJs Developer & Designer</p>
        <p>Located in Paris XI</p>
        <p>estelle.gresillon@gmail.com</p>
      </div>
      <div className="links">
        {PAGES.map((page) => {
          if (page.name === "Home") {
            return null;
          }
          return <Link to={page.url}>{page.name}</Link>;
        })}
        <p>Blog</p>
        <p>EN / FR</p>
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
