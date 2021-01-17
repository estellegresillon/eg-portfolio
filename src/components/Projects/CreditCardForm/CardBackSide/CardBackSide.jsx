import React from "react";
import times from "lodash/times";

import "./CardBackSide.scss";
import { CARD_BACKGROUNDS } from "../utils";

const CardBackSide = ({ isCardReversed, cardBg, CCV }) => (
  <div
    className="credit-card-back"
    style={{
      transform: isCardReversed ? "none" : "rotateY(180deg)",
      background: CARD_BACKGROUNDS[cardBg],
    }}
  >
    <div className="black-line" />
    <div className="cc-back-header">
      <div className="cc-back-ccv-name">CCV</div>
      <div className="cc-back-ccv-input">{times(CCV.length, () => "*")}</div>
    </div>
    <div className="cc-back-footer">
      <img
        className="card-logo back"
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
        alt="visa-logo"
      />
    </div>
  </div>
);

export default CardBackSide;
