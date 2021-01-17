import React from "react";

import "./Input.scss";

const Input = ({
  label,
  id,
  type,
  maxLength,
  placeholder,
  className,
  value,
  onFocus,
  onBlur,
  onChange,
  inputMode,
}) => (
  <div className="Input-Container">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      inputMode={inputMode}
      maxLength={maxLength}
      placeholder={placeholder}
      className={className}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  </div>
);

export default Input;
