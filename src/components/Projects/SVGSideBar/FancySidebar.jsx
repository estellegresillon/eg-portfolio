import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./FancySidebar.scss";
import { MENU } from "./utils";

const FancySidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Feather");

  return (
    <div id="Fancy-Sidebar">
      <div className="menu">
        <div className="logo-wrapper">
          <i className="fab fa-angrycreative" />
        </div>
        <nav>
          {MENU.map((itm) => {
            const isSelected = selectedItem === itm.name;
            return (
              <div
                key={itm.name}
                onClick={() => setSelectedItem(itm.name)}
                className={`menu-item ${isSelected && "is-selected"}`}
              >
                <i className={`fas fa-${itm.icon}`} />
                <div className="menu-item-tooltip">{itm.name}</div>
              </div>
            );
          })}
        </nav>
        <Link className="logout-wrapper" to="/">
          <i className="fas fa-sign-out-alt" />
          <div className="logout-tooltip">GO BACK</div>
        </Link>
      </div>
      <div className="container">
        <h1>FANCY SIDEBAR</h1>
        <Link className="logout-button" to="/">
          GO BACK
        </Link>
      </div>
    </div>
  );
};

export default FancySidebar;
