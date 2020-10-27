import React from "react";

import "./Button.scss";

const Button = ({ label }) => (
  <div className="CTA-Button">
    <div className="CTA-label">{label}</div>
    <i className="fas fa-arrow-right" />
  </div>
);

export default Button;
