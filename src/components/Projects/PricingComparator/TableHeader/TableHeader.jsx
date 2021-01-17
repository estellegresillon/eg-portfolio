import React, { useState } from "react";

import "./TableHeader.scss";
import { PRICING_SOLUTIONS } from "../utils";

const TableHeader = () => {
  const [monthlyOffer, setMonthlyOffer] = useState(true);

  return (
    <div className="table-header">
      <div className="update-offer">
        <div
          style={{
            fontWeight: monthlyOffer ? 700 : 300,
            color: monthlyOffer ? "black" : "gray",
          }}
        >
          Monthly
        </div>
        <div
          className="switch-button-container"
          onClick={() => setMonthlyOffer(!monthlyOffer)}
        >
          <div
            className="toggle-switch"
            style={{ right: monthlyOffer ? "28px" : "4px" }}
          />
        </div>
        <div
          style={{
            fontWeight: monthlyOffer ? 300 : 700,
            color: monthlyOffer ? "gray" : "black",
          }}
        >
          Yearly
        </div>
      </div>
      {PRICING_SOLUTIONS.map((solution) => {
        const isPopular = solution.name === "Premium";
        return (
          <div
            key={solution.name}
            style={{
              backgroundColor: isPopular ? "#0066ff" : "white",
              borderRadius: isPopular ? "10px 10px 0 0" : "0",
              color: isPopular ? "white" : "#0066ff",
              marginBottom: isPopular ? "-15px" : 0,
              height: isPopular ? "56px" : "auto",
            }}
            className="table-header-data"
          >
            {isPopular && <i className="fas fa-star" />}
            <div className="solution-name">{solution.name} </div>
            <div>
              <span className="solution-price">
                ${monthlyOffer ? solution.monthlyPrice : solution.yearlyPrice}
              </span>{" "}
              / {monthlyOffer ? "month" : "year"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TableHeader;
