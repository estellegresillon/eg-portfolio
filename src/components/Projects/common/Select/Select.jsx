import React from "react";

import "./Select.scss";

const Select = ({
  label,
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  name,
  renderOptions,
  firstOption = null,
}) => (
  <div className="Select-Container">
    <label htmlFor={id}>{label}</label>
    <select
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      name={name}
      id={id}
    >
      <option value="">{firstOption || label}</option>
      {renderOptions()}
    </select>
  </div>
);

export default Select;
