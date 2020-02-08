import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next'

import "./footer.scss";

const Footer = ({ showLightTheme, t }) => {
  return (
    <footer
      style={{ background: showLightTheme ? "rgb(77, 214, 254)" : "rgb(10, 11, 19)" }}
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