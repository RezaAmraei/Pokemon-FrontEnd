import React from "react";
import UpperCaseFirstLetter from "../Utils/UpperCaseFirstLetter";
import "../CSS/TableForData.css";
import DetermineHowManyTypes from "../Utils/DetermineHowManyTypes";

export default function BasicTable({ pokemonDisplay, types }) {
  return (
    <table className="tableForData">
      <caption className={types[1]}>
        <span className={types[0]}>
          {UpperCaseFirstLetter(pokemonDisplay.name)}
        </span>{" "}
        Base Stats
      </caption>
      <thead>
        <tr className={types[0]}>
          <th>HP</th>
          <th>Attack</th>
          <th>Defense</th>
          <th>Special Attack</th>
          <th>Special Defense</th>
          <th>Speed</th>
        </tr>
        <tr className={types[1]}>
          <td>{pokemonDisplay.stats[0].base_stat}</td>
          <td>{pokemonDisplay.stats[1].base_stat}</td>
          <td>{pokemonDisplay.stats[2].base_stat}</td>
          <td>{pokemonDisplay.stats[3].base_stat}</td>
          <td>{pokemonDisplay.stats[4].base_stat}</td>
          <td>{pokemonDisplay.stats[5].base_stat}</td>
        </tr>
      </thead>
    </table>
  );
}
