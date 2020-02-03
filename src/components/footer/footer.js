import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next'

import "./footer.scss";

const Footer = ({ showLightTheme, t }) => {
  return (
    <footer
      style={{ 
        color: showLightTheme ? "#0e0e0e" : "#fff",
        background: showLightTheme ? "#fff" : "#0e0e0e"
      }}
    >
      <p>{t('footer.credits')}</p>
      <p>{t('footer.techno')}</p>
    </footer>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(Footer));