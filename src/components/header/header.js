import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import i18n from 'i18next'
import { connect } from "react-redux";

import { toggleTheme } from "../../redux/actions";
import "./header.scss";

const Header = ({ showLightTheme, toggleTheme }) => {
  const [logoValue, setLogoValue] = useState("ESTELLE GRESILLON");
  const [language, setLanguage] = useState("");

  const handleLogoValueChange = e => {
    const windowHeight = window.innerHeight;
    const distanceFromTop = window.pageYOffset;
    const windowScrollHeight = document.body.scrollHeight;

    if (distanceFromTop + (windowHeight * 2) >= windowScrollHeight) {
      setLogoValue("CLICK HERE TO SCROLL TO TOP"); 
    } else if (distanceFromTop > windowHeight * 5) {
      setLogoValue("🍰🍰🍰"); 
    } else if (distanceFromTop > windowHeight * 4) {
      setLogoValue("🍰🍰"); 
    } else if (distanceFromTop > windowHeight * 3) {
      setLogoValue("🍰"); 
    } else if (distanceFromTop > windowHeight * 2) {
      setLogoValue("HELLO ?");
    } else if (distanceFromTop > windowHeight){
      setLogoValue("🖤🖤🖤");
    } else setLogoValue("ESTELLE GRESILLON");
  }

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleLogoValueChange, false);
    return () => window.removeEventListener("scroll", handleLogoValueChange, false);
  }, []);

  useEffect(() => {
    const currentLanguage = i18n.language;
    setLanguage(currentLanguage);
  }, []);

  return (
    <header 
      className="App-header"
      style={{ color: showLightTheme ? "#0e0e0e" : "#fff" }}
    >
      <div className="logo" aria-label="Estelle Grésillon" aria-hidden="true" onClick={() => window.scrollTo(0, 0)}>{logoValue}</div>
      
      <div className="center-menu">
        <div aria-hidden="true" className="theme" onClick={() => toggleTheme(showLightTheme)}>
          {showLightTheme ? 
            <i className="fas fa-sun" /> :
            <i className="fas fa-moon" />}
        </div>
        <div 
          className="language-menu"
          style={{ borderLeft: `1px solid ${showLightTheme ? "#0e0e0e" : "#fff"}` }}
        >
          <span 
            className={language === "fr" ? "bolder" : ""}
            onClick={() => handleLanguageChange('fr')}
          >FR</span>
          <span 
            className={language === "en" ? "bolder" : ""}
            onClick={() => handleLanguageChange('en')}
          >EN</span>
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
