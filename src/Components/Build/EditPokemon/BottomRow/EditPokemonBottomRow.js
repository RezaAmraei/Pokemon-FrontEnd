import React from "react";
import { useSelector } from "react-redux";
import { selectMoveset } from "../../../../redux/selectors";
import Button from "../../../Button/Button";
import "../EditPokemon.css";

const EditPokemonBottomRow = ({ currPokemon, ability }) => {
  const moveset = useSelector(selectMoveset);

  function addPokemonToTeam() {
    const pokemonToAdd = {
      id: currPokemon.id,
      name: currPokemon.name,
      image: currPokemon.sprites,
      moveset,
      ability,
    };

    if (JSON.parse(localStorage.getItem("teams"))) {
      let temp = JSON.parse(localStorage.getItem("teams"))[0].team;
      temp.push(pokemonToAdd);
      localStorage.setItem("teams", JSON.stringify(temp));
    } else {
      localStorage.setItem(
        "teams",
        JSON.stringify([
          {
            teamName: "",
            team: [pokemonToAdd],
          },
        ])
      );
    }
  }
  function findWhichSlot() {}

  return (
    <div className="editPokemonBottomRow">
      <Button
        text={"Save"}
        buttonClassName={"editPokemonBottomRowbutton"}
        onClick={() => addPokemonToTeam()}
      />
      <Button text={"Cancel"} buttonClassName={"editPokemonBottomRowbutton"} />
    </div>
  );
};

export default EditPokemonBottomRow;
