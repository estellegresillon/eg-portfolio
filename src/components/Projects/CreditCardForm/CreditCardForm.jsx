import React, { useState } from "react";

import "./CreditCardForm.scss";
import CardFrontSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";
import CCFormContainer from "./CCFormContainer";

const CreditCardForm = () => {
  const [isCardReversed, setIsCardReversed] = useState(false);
  const [cardBg, setCardBg] = useState(0);
  const [focus, setFocus] = useState("");
  const [cardInfos, setCardInfos] = useState({
    cardNumber: "",
    fullName: "",
    CCV: "",
    month: "",
    year: "",
  });

  const handleCardInfos = (input, value) => {
    setCardInfos({ ...cardInfos, [input]: value });
  };

  return (
    <div id="Credit-Card-Form">
      <div className="form-wrapper">
        <div className="credit-card-container">
          <CardFrontSide
            isCardReversed={isCardReversed}
            cardBg={cardBg}
            focus={focus}
            cardInfos={cardInfos}
          />
          <CardBackSide
            isCardReversed={isCardReversed}
            CCV={cardInfos.CCV}
            cardBg={cardBg}
          />
        </div>

        <CCFormContainer
          setIsCardReversed={setIsCardReversed}
          setFocus={setFocus}
          cardBg={cardBg}
          setCardBg={setCardBg}
          handleCardInfos={handleCardInfos}
          cardInfos={cardInfos}
        />
      </div>
    </div>
  );
};

export default CreditCardForm;
