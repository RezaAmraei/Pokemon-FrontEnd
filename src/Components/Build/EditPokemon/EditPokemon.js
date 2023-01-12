import React from "react";
import UpperCaseFirstLetter from "../../../Utils/UpperCaseFirstLetter";
import ChartForStats from "../ChartForStats";
import "./EditPokemon.css";

const EditPokemon = ({ addPokemon }) => {
  console.log(addPokemon);

  let pokemonStats = [
    addPokemon.stats[0].base_stat,
    addPokemon.stats[1].base_stat,
    addPokemon.stats[2].base_stat,
    addPokemon.stats[3].base_stat,
    addPokemon.stats[4].base_stat,
    addPokemon.stats[5].base_stat,
  ];
  return (
    <div className="editPokemon">
      <div className="editPokemonTopRow">
        <div>
          <img
            src={addPokemon.sprites.front_default}
            className="editPokemonImage"
          />
        </div>
        <div className="editPokemonTopRowMoves">
          <span>Moves</span>
          <input />
          <input />
          <input />
          <input />
        </div>
        <div className="editPokemonGraphOfStats">
          <ChartForStats pokemonStats={pokemonStats} />
        </div>
      </div>
      <div className="editPokemonMiddleRow">
        <div>{UpperCaseFirstLetter(addPokemon.name)}</div>
      </div>
      <div className="editPokemonBottomRow">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default EditPokemon;
