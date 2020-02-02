import React from "react";
import { connect } from "react-redux";

import "./footer.scss";

const Footer = ({ showLightTheme }) => {
  return (
    <footer
      style={{ 
        color: showLightTheme ? "#0e0e0e" : "#fff",
        background: showLightTheme ? "#fff" : "#0e0e0e"
      }}
    >
      <p>Design et développement par Estelle Grésillon ©2020 - Tous droits réservés</p>
    </footer>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default connect(mapStateToProps)(Footer);