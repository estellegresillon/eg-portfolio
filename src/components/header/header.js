import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { toggleTheme } from "../../redux/actions";
import "./header.scss";

const Header = ({ showLightTheme, toggleTheme }) => {
  return (
    <header 
      className="App-header"
      style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
    >
      <div className="logo" onClick={() => window.scrollTo(0, 0)}>ESTELLE GRESILLON</div>
      
      <div className="center-menu">
        <div aria-hidden="true" className="theme" onClick={() => toggleTheme(showLightTheme)}>
          {showLightTheme ? 
            <i className="fas fa-sun" /> :
            <i className="fas fa-moon" />}
        </div>
      </div>

      <nav>MENU <i className="fas fa-bars" /></nav>
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
