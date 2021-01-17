import React from "react";
import { withTranslation } from "react-i18next";

import "./TableBody.scss";
import { PRICING_SOLUTIONS, SOLUTIONS_ITEMS, setBorderRadius } from "../utils";

const TableBody = ({ t }) => (
  <div className="table-body">
    {SOLUTIONS_ITEMS.map((item) => (
      <div key={item} className="table-row">
        <div className="table-header-row">
          {t(`pricingComparator.item.${item}`)}
        </div>
        {PRICING_SOLUTIONS.map((solutionItem) => {
          const isPopular = solutionItem.name === "Premium";
          return (
            <div
              key={solutionItem.name}
              style={{
                backgroundColor: isPopular ? "#0066ff" : "white",
                color: isPopular ? "white" : "#0066ff",
                borderRadius: setBorderRadius(item, solutionItem.name),
              }}
              className="table-data"
            >
              {solutionItem[item] ? (
                <i className="fas fa-check-circle" />
              ) : (
                <i
                  style={{ color: isPopular ? "white" : "#cacdd0" }}
                  className="fas fa-times-circle"
                />
              )}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

export default withTranslation()(TableBody);
