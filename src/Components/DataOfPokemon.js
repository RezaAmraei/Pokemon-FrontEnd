import React from "react";
import "../CSS/DataOfPokemon.css";
import TableForData from "./TableForData";
import UpperCaseFirstLetter from "../Utils/UpperCaseFirstLetter";
import SplitStringInHalf from "../Utils/SplitStringInHalf";
const DataOfPokemon = ({ pokemonDisplay, types }) => {
  let splitName = SplitStringInHalf(pokemonDisplay.name);
  console.log(pokemonDisplay);
  console.log(types);
  return (
    <>
      {pokemonDisplay && (
        <div className="pokemonData">
          <div id="nameOfPokemon">
            <span id="nameOfPokemon" className={types[0]}>
              {UpperCaseFirstLetter(splitName[0])}
            </span>
            <span id="nameOfPokemon" className={types[1]}>
              {splitName[1]}
            </span>
          </div>
          <div className="dataOfPokemonImages">
            <img src={pokemonDisplay.sprites.front_default} />
            <img src={pokemonDisplay.sprites.front_shiny} />
          </div>
          <TableForData pokemonDisplay={pokemonDisplay} types={types} />
        </div>
      )}
    </>
  );
};

export default DataOfPokemon;
