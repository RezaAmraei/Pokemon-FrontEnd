import React from "react";
import "../CSS/DataOfPokemon.css";
import TableForData from "./TableForData";
import UpperCaseFirstLetter from "../Utils/UpperCaseFirstLetter";
import SplitStringInHalf from "../Utils/SplitStringInHalf";
import SetUpForTables from "../Utils/SetUpForTables";

const DataOfPokemon = ({ pokemonDisplay, types }) => {
  let splitName;
  let dataForTable;

  splitName = SplitStringInHalf(pokemonDisplay.name);
  dataForTable = SetUpForTables(pokemonDisplay);
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
          <TableForData
            name={pokemonDisplay.name}
            caption={"Base_Stats"}
            types={types}
            tableHeader={SetUpForTables(pokemonDisplay).stats}
            data={pokemonDisplay.stats}
            map={false}
          />
          <TableForData
            name={pokemonDisplay.name}
            caption={"Information"}
            types={types}
            tableHeader={SetUpForTables(pokemonDisplay).information}
            data={SetUpForTables(pokemonDisplay).information}
            map={true}
          />
        </div>
      )}
    </>
  );
};

export default DataOfPokemon;
