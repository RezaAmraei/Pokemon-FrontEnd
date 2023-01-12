import React from "react";
import "./Button.css";
const Button = ({
  text,
  secondaryText = null,
  buttonClassName,
  onClick = null,
}) => {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {secondaryText && <span>{secondaryText}</span>}
      {text}
    </button>
  );
};

export default Button;
