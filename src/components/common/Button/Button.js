import React from "react";

import "./Button.scss";

const Button = ({ label, width }) => (
  <div className="CTA-Button" style={{ width }}>
    {label} <i className="fas fa-arrow-right" />
  </div>
);

export default Button;
