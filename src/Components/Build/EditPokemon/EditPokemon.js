import React from "react";
import UpperCaseFirstLetter from "../../../Utils/UpperCaseFirstLetter";
import ChartForStats from "../ChartForStats";
import "./EditPokemon.css";

const EditPokemon = ({ addPokemon }) => {
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
          <ChartForStats />
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
