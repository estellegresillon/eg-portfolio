import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";

import "./app.scss";
import Header from "./header";
import HeroScene from "./hero-scene";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";

const App = ({ showLightTheme }) => {
  const mouseContainer = useRef(null);
  const mouseRef = useRef(null);

  const onCursorMove = (e, cursor, offset) => {
    const relX = e.clientX - offset;
    const relY = e.clientY - offset;
    mouseRef.current = relY;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  };

  const onScroll = cursor => {
    cursor.style.top = mouseRef.current + "px";
  };

  useEffect(() => {
    const smallCursor = mouseContainer.current;
    window.addEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 5) }, false);
    return () => window.removeEventListener("mousemove", (e) => { onCursorMove(e, smallCursor, 5) }, false);
  }, []);

  useEffect(() => {
    const smallCursor = mouseContainer.current;
    window.addEventListener("scroll", () => { onScroll(smallCursor) });
    return () => window.removeEventListener("scroll", () => { onScroll(smallCursor) });
  }, []);

  return (
    <div className="app">
      <div 
        aria-hidden="true"
        className="cursor-small" 
        ref={mouseContainer}
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

export default connect(mapStateToProps)(App);
