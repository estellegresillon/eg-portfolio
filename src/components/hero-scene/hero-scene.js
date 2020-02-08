import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import "./hero-scene.scss";

const HeroScene = ({ showLightTheme, t }) => {
  const heroCursor = useRef(null);
  const heroScene = useRef(null);
  const heroTitleOne = useRef(null);
  const heroTitleTwo = useRef(null);
  const heroTitleThree = useRef(null);
  const heroTitleFour = useRef(null);

  const onCursorMove = (e, container, cursor, offset) => {
    const relX = e.pageX - container.offsetLeft - offset;
    const relY = e.pageY - container.offsetTop - offset;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  }

  const slideTitleToLeft = e => {
    const containerTop = heroScene.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    heroTitleOne.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.5},0,0,1)`;
    heroTitleTwo.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.5},0,0,1)`;
    heroTitleThree.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.5},0,0,1)`;
    heroTitleFour.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.5},0,0,1)`;
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
      aria-hidden="true"
      style={{ 
        color: showLightTheme ? "#000" : "#fff",
        background: showLightTheme ? "#fff" : "linear-gradient(187deg, rgb(0, 0, 0) 0%, rgb(20, 31, 45) 100%)"
      }}
    >
      <div
        className="hero-cursor"
        ref={heroCursor}
        style={{ mixBlendMode: showLightTheme ? "screen" : "darken" }}
      />
      <h1 className="first" ref={heroTitleOne}>
        <span className="title-stroke">DESIGNER</span>
        <span className="title-plain">UI</span>
        <span className="title-stroke">DESIGNER</span>
        <span className="title-plain">UI</span>
        <span className="title-stroke">DESIGNER</span>
      </h1>
      <h1 ref={heroTitleTwo}>
        <span className="title-stroke">FRONTEND</span>
        <span className="title-plain">DEVELOPER</span>
        <span className="title-stroke">FRONTEND</span>
        <span className="title-plain">DEVELOPER</span>
      </h1>
      <h1 className="first mobile-only" ref={heroTitleThree}>
        <span className="title-stroke">DESIGNER</span>
        <span className="title-plain">UI</span>
        <span className="title-stroke">DESIGNER</span>
        <span className="title-plain">UI</span>
        <span className="title-stroke">DESIGNER</span>
      </h1>
      <h1 className="mobile-only" ref={heroTitleFour}>
        <span className="title-stroke">FRONTEND</span>
        <span className="title-plain">DEVELOPER</span>
        <span className="title-stroke">FRONTEND</span>
      </h1>
      <ul className="skillset">
        <li>{t('hero-scene.front-end')}</li>
        <li className="tools">REACT.JS - NEXTJS - REDUX - CONTEXT REACT</li>
        <br />
        <li>UI DESIGN</li>
        <li className="tools">SKETCH - ADOBE - INVISION - ZEPLIN</li>
      </ul>
      <p className="availability">{t('hero-scene.availability')}</p>
    </section>
  );
}

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(HeroScene));
