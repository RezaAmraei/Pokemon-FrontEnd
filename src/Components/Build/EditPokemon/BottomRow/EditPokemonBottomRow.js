import React from "react";
import Button from "../../../Button/Button";
import "../EditPokemon.css";

const EditPokemonBottomRow = ({
  pokemonToAdd,
  setPokemonToAdd,
  currPokemon,
  moveset,
  ability,
}) => {
  function addPokemonToTeam(pokemonAdded) {
    setPokemonToAdd({
      id: currPokemon.id,
      name: currPokemon.name,
      image: currPokemon.sprites,
      moveset,
      ability,
    });
    if (JSON.parse(localStorage.getItem("teams")).length) {
      let temp = JSON.parse(localStorage.getItem("teams"));
      temp.push(pokemonAdded);
      localStorage.setItem("teams", JSON.stringify(temp));
    } else {
      localStorage.setItem("teams", JSON.stringify([pokemonAdded]));
    }
  }
  function findWhichSlot() {}

  return (
    <div className="editPokemonBottomRow">
      <Button
        text={"Save"}
        buttonClassName={"editPokemonBottomRowbutton"}
        onClick={() => addPokemonToTeam(pokemonToAdd)}
      />
      <Button text={"Cancel"} buttonClassName={"editPokemonBottomRowbutton"} />
    </div>
  );
};

export default EditPokemonBottomRow;
