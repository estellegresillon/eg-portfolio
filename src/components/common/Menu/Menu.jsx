import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import "./Menu.scss";
import MenuList from "./MenuList";

const NO_MENU = [
  "/stripe-menu",
  "/pricing-comparator",
  "/3d-gamepad",
  "/credit-card-form",
  "/waves-canvas",
];

const Menu = ({ location }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  if (NO_MENU.includes(location.pathname)) {
    return null;
  }

  const isProjects = location.pathname === "/projects";
  const isDark = location.pathname !== "/";

  const navClassName = () => {
    if (isProjects) return "projects-nav";
    if (isDark) return "dark-nav";
    return "";
  };

  return (
    <nav id="Nav" className={navClassName()}>
      <Link to="/">
        <div className="logo">
          <div>ESTELLE</div>
          <div>GRéSILLON</div>
        </div>
      </Link>
      <div className="mobile-menu-wrapper">
        <div onClick={() => setIsMenuVisible(true)} className="mobile-menu">
          <p>MENU</p>
          <i className="fas fa-hamburger" />
        </div>
        {isMenuVisible && (
          <div className="mobile-menu-content">
            <div onClick={() => setIsMenuVisible(false)} className="menu-close">
              <i className="fas fa-times" />
            </div>
            <MenuList onClick={() => setIsMenuVisible(false)} />
          </div>
        )}
      </div>
      <div className="menu">
        <MenuList />
      </div>
    </nav>
  );
};

export default withRouter(Menu);
