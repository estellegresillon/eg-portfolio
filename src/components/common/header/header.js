import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { toggleTheme } from "../../../redux/actions";
import "./header.scss";

const Header = ({ showLightTheme, toggleTheme }) => {
  const [profession, setProfession] = useState("CREATIVE DEVELOPER");

  return (
    <header 
      className="App-header"
      style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
    >
      <div className="logo" onClick={() => window.scrollTo(0, 0)}>ESTELLE GRESILLON</div>
      <div
        className="profession"
        onMouseEnter={() => setProfession("💙💙💙")}
        onMouseLeave={() => setProfession("CREATIVE DEVELOPER")}
      >{profession}</div>
      <div className="theme" onClick={() => toggleTheme(showLightTheme)}>
        {showLightTheme ? "DARK THEME" : "LIGHT THEME"}
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleTheme }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
