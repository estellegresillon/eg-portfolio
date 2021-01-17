import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, draco } from "drei";

import "./GamePad.scss";
import { MENU, DEFAULT_BODY_COLOR, DEFAULT_BUTTONS_COLOR } from "./utils";
import ColorPalette from "./ColorPalette";

const GamePad = ({ bodyColor, buttonsColor }) => {
  const { scene } = useLoader(GLTFLoader, "/gamepad.glb", draco());

  return (
    <group position={[-1, 1, 0]} rotation={[0, 0.5, 0]} dispose={null}>
      <primitive
        object={scene}
        children-2-material-color={bodyColor}
        children-3-material-color={buttonsColor}
      />
    </group>
  );
};

const GamePadWrapper = () => {
  const [bodyColor, setBodyColor] = useState(DEFAULT_BODY_COLOR);
  const [buttonsColor, setButtonsColor] = useState(DEFAULT_BUTTONS_COLOR);

  return (
    <div id="GamePad">
      <div className="menu">
        <div className="logo-wrapper">
          <i className="fas fa-gamepad" />
        </div>
        <nav>
          {MENU.map((itm) => (
            <div key={itm.name} className="menu-item">
              <i className={`fas fa-${itm.icon}`} />
              <div className="menu-item-tooltip">{itm.name}</div>
            </div>
          ))}
        </nav>
        <Link className="logout-wrapper" to="/">
          <i className="fas fa-sign-out-alt" />
          <div className="logout-tooltip">GO BACK</div>
        </Link>
      </div>
      <div className="page-container">
        <ColorPalette
          setBodyColor={setBodyColor}
          setButtonsColor={setButtonsColor}
          bodyColor={bodyColor}
          buttonsColor={buttonsColor}
        />
        <Canvas invalidateFrameloop camera={{ position: [-3, 5, 12], far: 50 }}>
          <ambientLight />
          <spotLight
            intensity={3}
            position={[20, 20, 20]}
            shadow-bias={-0.00005}
            angle={Math.PI / 6}
          />
          <Suspense fallback={null}>
            <GamePad buttonsColor={buttonsColor} bodyColor={bodyColor} />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <Link className="logout-button" to="/projects">
          GO BACK
        </Link>
      </div>
    </div>
  );
};

export default GamePadWrapper;
