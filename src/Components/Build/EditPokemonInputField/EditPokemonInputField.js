import React, { useState, useEffect } from "react";
import "./EditPokemonInputField.css";

const EditPokemonInputField = ({ placeholder, className }) => {
  function clickedOn() {
    console.log("user is in the input field");
  }
  function clickedOff() {
    console.log("user is out the input field");
  }
  return (
    <input
      placeholder={placeholder}
      onFocus={clickedOn}
      onBlur={clickedOff}
      className={className}
    />
  );
};

export default EditPokemonInputField;
