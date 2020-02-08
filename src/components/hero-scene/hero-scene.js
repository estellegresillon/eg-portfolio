import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import "./hero-scene.scss";

const HeroScene = ({ showLightTheme, t }) => {
  const heroCursor = useRef(null);
  const heroScene = useRef(null);
  const heroTitleOne = useRef(null);
  const heroTitleTwo = useRef(null);
  const circleTop = useRef(null);
  const circleBottom = useRef(null);

  const onCursorMove = (e, container, cursor, offset) => {
    const relX = e.pageX - container.offsetLeft - offset;
    const relY = e.pageY - container.offsetTop - offset;
    cursor.style.left = relX + "px";
    cursor.style.top = relY + "px";
  }

  const toggleCursor = bool => {
    if (bool) {
      heroCursor.current.style.opacity = 0.2;
    } else heroCursor.current.style.opacity = 0;
  }

  const slideTitleToLeft = e => {
    const containerTop = heroScene.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    heroTitleOne.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.5},0,0,1)`;
    heroTitleTwo.current.style.transform = 
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.5},0,0,1)`;
  }

  const moveCircles = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    circleTop.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.2},${distanceFromMiddleY * -0.1},0,1)`;
    circleBottom.current.style.transform =
      `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * 0.2},${distanceFromMiddleY * -0.1},0,1)`;
  }

  useEffect(() => {
    const heroContainer = heroScene.current;
    const mouseContainer = heroCursor.current;
    heroContainer.addEventListener("mousemove", (e) => { onCursorMove(e, heroContainer, mouseContainer, 75) }, false);
    return () => heroContainer.removeEventListener("mousemove", (e) => { onCursorMove(e, heroContainer, mouseContainer, 75) }, false);
  }, []);

  useEffect(() => {
    const heroContainer = heroScene.current;
    heroContainer.addEventListener("mousemove", moveCircles, false);
    return () => heroContainer.removeEventListener("mousemove", moveCircles, false);
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
      onMouseEnter={() => toggleCursor(true)}
      onMouseLeave={() => toggleCursor(false)}
      style={{ background: showLightTheme ? "linear-gradient(rgb(71, 150, 247) 0%, rgb(72, 185, 239) 100%)" : "linear-gradient(180deg, #0a0c13 0%, #15192b 100%)" }}
    >
      <div className="hero-cursor" ref={heroCursor} />
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
     
      <ul className="skillset">
        <li>{t('hero-scene.front-end')}</li>
        <li className="tools">REACT.JS - NEXTJS - REDUX - CONTEXT REACT</li>
        <br />
        <li>UI DESIGN</li>
        <li className="tools">SKETCH - ADOBE - INVISION - ZEPLIN</li>
      </ul>
      <p className="availability">{t('hero-scene.availability')}</p>

      <div className="scroll-animation">
        <div className="mouse-scroll-ball" />
      </div>

      <div className="circle circle-top" ref={circleTop} />
      <div className="circle circle-bottom" ref={circleBottom} />

      <Cross position="top-left" />
      <Cross position="top-right" />
      <Cross position="bottom-left" />
      <Cross position="bottom-right" />

      <div style={{ opacity: showLightTheme ? 0.1 : 1 }}>
        <img src="triangle.svg" alt="triangle" className="triangle top-left-triangle" />
        <img src="triangle.svg" alt="triangle" className="triangle bottom-right-triangle" />
        <img src="triangle.svg" alt="triangle" className="triangle bottom-left-triangle" />
      </div>
    </section>
  );
}

const Cross = ({ position }) => (
  <div className={`cross-wrapper ${position}-cross`}>
    <div className="cross-vertical" />
    <div className="cross-horizontal" />
  </div>
)

const mapStateToProps = state => {
  return { showLightTheme: state.showLightTheme };
};

export default withTranslation()(connect(mapStateToProps)(HeroScene));
