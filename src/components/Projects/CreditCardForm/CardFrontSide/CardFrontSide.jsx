import React from "react";

import "./CardFrontSide.scss";
import { displayCardNumber, CARD_BACKGROUNDS } from "../utils";

const CardFrontSide = ({ isCardReversed, cardBg, focus, cardInfos }) => (
  <div
    className="credit-card-front"
    style={{
      transform: isCardReversed ? "rotateY(180deg)" : "none",
      background: CARD_BACKGROUNDS[cardBg],
    }}
  >
    <div className="cc-front-header">
      <img
        className="card-chip"
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
        alt="chip"
      />
      <img
        className="card-logo front"
        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
        alt="visa-logo"
      />
    </div>
    <div
      className={`cc-front-number ${focus === "cardNumber" && "is-focused"}`}
    >
      {displayCardNumber(cardInfos.cardNumber)}
    </div>

    <div className="cc-front-footer">
      <div
        className={`cc-front-footer-name ${
          focus === "fullName" && "is-focused"
        }`}
      >
        <div className="footer-name-label">Card holder</div>
        <div className="cc-front-name">
          {cardInfos.fullName.length > 0 ? cardInfos.fullName : "FULL NAME"}
        </div>
      </div>
      <div
        className={`cc-front-footer-dates ${focus === "date" && "is-focused"}`}
      >
        <div className="footer-dates-label">Expires</div>
        <div className="cc-front-dates">
          <div className="cc-front-month">
            {cardInfos.month.length > 0 ? cardInfos.month : "MM"}
          </div>
          <div>/</div>
          <div className="cc-front-year">
            {cardInfos.year.length > 0 ? cardInfos.year.substring(2) : "YY"}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardFrontSide;
