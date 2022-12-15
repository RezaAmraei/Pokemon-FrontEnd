import React from "react";
import PokeBalls from "../Utils/PokeBalls";
import "../CSS/ColumnOfPokeBalls.css";
import { sliderClasses } from "@mui/material";

const ColumnOfPokeBalls = ({ side }) => {
  const pokeBallFunction = PokeBalls();
  return (
    <div className={`columnForPokeBalls ${side}`}>
      <img
        src={pokeBallFunction[side].first.url}
        alt={pokeBallFunction[side].first.alt}
      />

      <img
        src={pokeBallFunction[side].second.url}
        alt={pokeBallFunction[side].second.alt}
      />

      <img
        src={pokeBallFunction[side].third.url}
        alt={pokeBallFunction[side].third.alt}
      />

      <img
        src={pokeBallFunction[side].fourth.url}
        alt={pokeBallFunction[side].fourth.alt}
      />
    </div>
  );
};

export default ColumnOfPokeBalls;
