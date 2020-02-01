import React, { useRef, useEffect } from 'react';

import "./cursors.scss";
import Header from "./common/header";
import HeroScene from "./hero-scene";
import Projects from "./projects";
import Contact from "./contact";

const App = () => {
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
    <div className="estelle-gresillon">
      <div className="cursor-small" ref={mouseContainer} />
      <Header />
      <HeroScene />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
