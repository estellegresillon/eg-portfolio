import React from "react";
import { Link } from "react-router-dom";

import "./CCFormContainer.scss";
import Input from "components/Projects/common/Input";
import Select from "components/Projects/common/Select";
import { addSpaces, MONTHS, createYears } from "../utils";

const CCFormContainer = ({
  setIsCardReversed,
  setFocus,
  cardBg,
  setCardBg,
  cardInfos,
  handleCardInfos,
}) => (
  <div className="CCForm-container">
    <Input
      label="Credit card number"
      id="ccn"
      type="tel"
      inputMode="numeric"
      maxLength="19"
      placeholder="XXXX XXXX XXXX XXXX"
      className="card-number-input"
      value={addSpaces(cardInfos.cardNumber)}
      onChange={(e) => handleCardInfos("cardNumber", e.target.value)}
      onFocus={() => setFocus("cardNumber")}
      onBlur={() => setFocus("")}
    />
    <Input
      label="Full name"
      id="fullName"
      type="text"
      maxLength="27"
      placeholder="Full name"
      className="full-name-input"
      value={cardInfos.fullName}
      onFocus={() => setFocus("fullName")}
      onBlur={() => setFocus("")}
      onChange={(e) => handleCardInfos("fullName", e.target.value)}
    />

    <div className="CCForm-section">
      <Input
        label="CCV"
        id="ccv"
        type="tel"
        inputMode="numeric"
        maxLength="3"
        placeholder="XXX"
        className="ccv-input"
        value={cardInfos.CCV}
        onChange={(e) => handleCardInfos("CCV", e.target.value)}
        onFocus={() => setIsCardReversed(true)}
        onBlur={() => setIsCardReversed(false)}
      />

      <div className="month-year">
        <Select
          label="Month"
          value={cardInfos.month}
          onChange={(e) => handleCardInfos("month", e.target.value)}
          onFocus={() => setFocus("date")}
          onBlur={() => setFocus("")}
          name="month"
          id="month-select"
          renderOptions={() =>
            MONTHS.map((month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))
          }
        />
        <Select
          label="Year"
          value={cardInfos.year}
          onChange={(e) => handleCardInfos("year", e.target.value)}
          onFocus={() => setFocus("date")}
          onBlur={() => setFocus("")}
          name="year"
          id="year-select"
          renderOptions={() =>
            createYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))
          }
        />
      </div>
    </div>

    <div className="disclaimer">
      Fill the inputs to see the component in action.
    </div>

    <div className="cc-form-footer">
      <Link
        to="/projects"
        onClick={() => setCardBg(cardBg === 4 ? 0 : cardBg + 1)}
      >
        Go back
      </Link>
      <div onClick={() => setCardBg(cardBg === 4 ? 0 : cardBg + 1)}>
        Change card style
      </div>
    </div>
  </div>
);

export default CCFormContainer;
