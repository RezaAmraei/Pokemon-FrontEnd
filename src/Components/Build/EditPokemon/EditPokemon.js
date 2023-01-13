import React from "react";
import EditPokemonTopRow from "./TopRow/EditPokemonTopRow";
import EditPokemonMiddleRow from "./MiddleRow/EditPokemonMiddleRow";
import EditPokemonBottomRow from "./BottomRow/EditPokemonBottomRow";
import "./EditPokemon.css";

const EditPokemon = ({ addPokemon }) => {
  return (
    <div className="editPokemon">
      <EditPokemonTopRow addPokemon={addPokemon} />
      <EditPokemonMiddleRow addPokemon={addPokemon} />
      <EditPokemonBottomRow />
    </div>
  );
};

export default EditPokemon;
