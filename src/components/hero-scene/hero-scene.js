import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";

import "./hero-scene.scss";

const HeroScene = ({ showLightTheme }) => {
  const heroCursor = useRef(null);
  const heroScene = useRef(null);
  const heroTitle = useRef(null);
  const heroTitleTop = useRef(null);

  const onCursorMove = (e, container, cursor, offset) => {
    const relX = e.pageX - container.offsetLeft - offset;
    const relY = e.pageY - container.offsetTop - offset;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  }

  const slideTitleToLeft = e => {
    const containerTop = heroScene.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    heroTitle.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.5},0,0,1)`;
    heroTitleTop.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.5},0,0,1)`
  }

  useEffect(() => {
    const heroContainer = heroScene.current;
    const mouseContainer = heroCursor.current;
    heroContainer.addEventListener("mousemove", (e) => { onCursorMove(e, heroContainer, mouseContainer, 280) }, false);
    return () => heroContainer.removeEventListener("mousemove", (e) => { onCursorMove(e, heroContainer, mouseContainer, 280) }, false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", slideTitleToLeft, false);
    return () => window.removeEventListener("scroll", slideTitleToLeft, false);
  }, []);

  return (
    <section 
      className="hero-scene" 
      ref={heroScene}
      style={{ 
        color: showLightTheme ? "#0e0e0e" : "#fff",
        background: showLightTheme ? "#fff" : "#0e0e0e"
      }}
    >
      <div
        className="hero-cursor"
        ref={heroCursor}
        style={{ mixBlendMode: showLightTheme ? "screen" : "darken" }}
      />
      <h1 className="first" ref={heroTitleTop}>
        <span className="title-stroke">DESIGNER</span>
        <span className="title-plain">UX</span>
        <span className="title-stroke">DESIGNER</span>
        <span className="title-plain">UI</span>
        <span className="title-stroke">DESIGNER</span>
      </h1>
      <h1 ref={heroTitle}>
        <span className="title-stroke">FRONTEND</span>
        <span className="title-plain">DEVELOPER</span>
        <span className="title-stroke">FRONTEND</span>
        <span className="title-plain">DEVELOPER</span>
      </h1>
      <ul className="skillset">
        <li>DéVELOPPEMENT FRONT-END</li>
        <li className="tools">REACT.JS - NEXTJS - REDUX - CONTEXT REACT API</li>
        <br />
        <li>UI/UX DESIGN</li>
        <li className="tools">SKETCH - ADOBE - INVISION - ZEPLIN</li>
      </ul>
      <p className="availability">Disponible en Avril 2020</p>
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default connect(mapStateToProps)(HeroScene);
