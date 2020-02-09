import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";

import "./home.scss";
import Header from "./header";
import HeroScene from "./hero-scene";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import { animateTitle } from "./animate-title";

const Home = ({ showLightTheme }) => {
  const mouseContainer = useRef(null);

  const onCursorMove = (e, cursor, offset) => {
    const relX = e.clientX - offset;
    const relY = e.clientY - offset;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  };

  useEffect(() => {
    const smallCursor = mouseContainer.current;
    window.addEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 7) }, false);
    return () => window.removeEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 7) }, false);
  }, []);

  useEffect(() => {
    animateTitle();
  }, []);

  return (
    <div className="app">
      <div 
        aria-hidden="true"
        className="cursor-small" 
        ref={mouseContainer}
        style={{ backgroundColor: showLightTheme ? "#1c1c8e" : "#8646ee" }}
      />
      <Header />
      <HeroScene />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default connect(mapStateToProps)(Home);
