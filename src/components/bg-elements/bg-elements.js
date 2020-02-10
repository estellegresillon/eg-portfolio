import React from "react";
import { connect } from "react-redux";

import "./bg-elements.scss";

const BgElements = ({ showLightTheme }) => {
  return (
    <div aria-hidden="true">
      <div style={{ opacity: showLightTheme ? 0.7 : 0.3 }}>
        <Cross position="top-left" />
        <Cross position="top-right" />
        <Cross position="bottom-left" />
        <Cross position="bottom-right" />
      </div>

      <div style={{ opacity: showLightTheme ? 0.1 : 0.3 }}>
        <img src="triangle.svg" alt="triangle" className="triangle top-left-triangle" />
        <img src="triangle.svg" alt="triangle" className="triangle bottom-right-triangle" />
        <img src="triangle.svg" alt="triangle" className="triangle bottom-left-triangle" />
      </div>
    </div>
  );
}

const Cross = ({ position }) => (
  <div className={`cross-wrapper ${position}-cross`}>
    <div className="cross-vertical" />
    <div className="cross-horizontal" />
  </div>
);

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default connect(mapStateToProps)(BgElements);