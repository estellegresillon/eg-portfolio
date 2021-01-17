import React from "react";

import "./TableFooter.scss";
import { PRICING_SOLUTIONS } from "../utils";

const TableFooter = () => (
  <div className="table-footer">
    <div className="empty" />
    {PRICING_SOLUTIONS.map((solution) => {
      const isPopular = solution.name === "Premium";
      return (
        <div
          key={solution.name}
          style={{
            backgroundColor: isPopular ? "#0066ff" : "white",
            borderRadius: isPopular ? "0 0 10px 10px" : "0",
            color: isPopular ? "white" : "#0066ff",
            marginTop: isPopular ? "-15px" : 0,
            height: isPopular ? "50px" : "auto",
          }}
          className="table-footer-data"
        >
          <div className={`choose-button ${isPopular && "popular"}`}>
            Get started
          </div>
        </div>
      );
    })}
  </div>
);

export default TableFooter;
