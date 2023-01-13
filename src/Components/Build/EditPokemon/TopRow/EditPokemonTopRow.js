import React from "react";
import EditPokemonInputField from "../../EditPokemonInputField/EditPokemonInputField";
import ChartForStats from "../../ChartForStats";
import "../EditPokemon.css";

const EditPokemonTopRow = ({ addPokemon }) => {
  let pokemonStats = [
    addPokemon.stats[0].base_stat,
    addPokemon.stats[1].base_stat,
    addPokemon.stats[2].base_stat,
    addPokemon.stats[3].base_stat,
    addPokemon.stats[4].base_stat,
    addPokemon.stats[5].base_stat,
  ];
  return (
    <div className="editPokemonTopRow">
      <div>
        <img
          src={addPokemon.sprites.front_default}
          className="editPokemonImage"
        />
      </div>
      <div className="editPokemonTopRowMoves">
        <span className="white">Moves</span>
        <EditPokemonInputField
          placeholder={"Move 1"}
          className={"editPokemonMoveset"}
        />
        <EditPokemonInputField
          placeholder={"Move 2"}
          className={"editPokemonMoveset"}
        />
        <EditPokemonInputField
          placeholder={"Move 3"}
          className={"editPokemonMoveset"}
        />
        <EditPokemonInputField
          placeholder={"Move 4"}
          className={"editPokemonMoveset"}
        />
      </div>
      <div className="editPokemonGraphOfStats">
        <ChartForStats pokemonStats={pokemonStats} />
      </div>
    </div>
  );
};

export default EditPokemonTopRow;
