import React from "react";
import UpperCaseFirstLetter from "../../Utils/UpperCaseFirstLetter";
import ColorTypes from "../../Utils/ColorOfTypes.json";
import "./PokemonTypeBox.css";

const PokemonTypeBox = ({ type }) => {
  return (
    <div
      className="pokemonTypeBox"
      style={{ backgroundColor: ColorTypes[type] }}
    >
      {UpperCaseFirstLetter(type)}
    </div>
  );
};

export default PokemonTypeBox;
