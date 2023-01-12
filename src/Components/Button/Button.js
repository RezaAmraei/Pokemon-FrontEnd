import React from "react";
import "./Button.css";
const Button = ({ text, secondaryText = null, buttonClassName }) => {
  return (
    <button className={buttonClassName}>
      {secondaryText && <span>{secondaryText}</span>}
      {text}
    </button>
  );
};

export default Button;
