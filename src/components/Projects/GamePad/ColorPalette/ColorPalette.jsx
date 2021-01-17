import React, { useState } from "react";

import "./ColorPalette.scss";
import { COLORS, DEFAULT_BODY_COLOR, DEFAULT_BUTTONS_COLOR } from "../utils";

const ColorPalette = ({
  bodyColor,
  buttonsColor,
  setBodyColor,
  setButtonsColor,
}) => {
  const [updateBody, setUpdateBody] = useState(true);

  const handleColorChange = (color) => {
    if (updateBody) {
      bodyColor === color
        ? setBodyColor(DEFAULT_BODY_COLOR)
        : setBodyColor(color);
    } else
      buttonsColor === color
        ? setButtonsColor(DEFAULT_BUTTONS_COLOR)
        : setButtonsColor(color);
  };

  const handleReinitialize = () => {
    setBodyColor(DEFAULT_BODY_COLOR);
    setButtonsColor(DEFAULT_BUTTONS_COLOR);
  };

  const chooseClassName = (color) => {
    const isColorBodySelected = updateBody && bodyColor === color;
    const isColorButtonsSelected = !updateBody && buttonsColor === color;
    return isColorBodySelected || isColorButtonsSelected;
  };

  return (
    <div className="Color-Palette">
      <div className="palette-body">
        {COLORS.map((color) => (
          <div
            className={`color-item ${
              chooseClassName(color.code) && "selected"
            }`}
            onClick={() => handleColorChange(color.code)}
            key={color.name}
          >
            {color.name}
          </div>
        ))}
      </div>
      <div className="palette-footer">
        <div
          className={updateBody && "selected"}
          onClick={() => setUpdateBody(true)}
        >
          BODY
        </div>
        <div
          className={!updateBody && "selected"}
          onClick={() => setUpdateBody(false)}
        >
          BUTTONS
        </div>
        <div onClick={() => handleReinitialize()}>REINITIALIZE</div>
      </div>
    </div>
  );
};

export default ColorPalette;
