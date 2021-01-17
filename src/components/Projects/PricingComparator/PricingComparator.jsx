import React from "react";
import { Link } from "react-router-dom";

import "./PricingComparator.scss";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const PricingComparator = () => (
  <div id="Pricing-Comparator">
    <div className="pricing-container">
      <Link className="go-back" to="/projects">
        <i className="fas fa-chevron-left" />
        <p>Go back</p>
      </Link>
      <h1>Choose your plan</h1>
      <h2>
        This is a pricing component. Hover the table below to see it's complete
        design. You can also toggle the pricing amount per month or per year.
      </h2>
      <div className="pricing-table">
        <TableHeader />
        <TableBody />
        <TableFooter />
      </div>
    </div>
  </div>
);

export default PricingComparator;
