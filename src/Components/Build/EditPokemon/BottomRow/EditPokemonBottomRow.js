import React from "react";
import { useSelector } from "react-redux";
import { selectMoveset } from "../../../../redux/selectors";
import Button from "../../../Button/Button";
import "../EditPokemon.css";
import { useDispatch } from "react-redux";
import {
  addPokemonToParty,
  setMoveset,
  togglePokemonConfirmed,
  toggleSearchBarButton,
} from "../../../../redux/partySlice";

const EditPokemonBottomRow = ({ currPokemon, ability }) => {
  const moveset = useSelector(selectMoveset);
  const dispatch = useDispatch();

  function addPokemonToTeam() {
    const pokemonToAdd = {
      id: currPokemon.id,
      name: currPokemon.name,
      image: currPokemon.sprites,
      moveset,
      ability,
    };

    if (JSON.parse(localStorage.getItem("teams"))) {
      let temp = JSON.parse(localStorage.getItem("teams"));
      temp[0].team.push(pokemonToAdd);
      localStorage.setItem("teams", JSON.stringify(temp));
      dispatch(addPokemonToParty(pokemonToAdd));
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
      dispatch(addPokemonToParty(pokemonToAdd));
    }
  }

  const cancelButton = function () {
    dispatch(toggleSearchBarButton(true));
    dispatch(setMoveset("reset"));
    dispatch(togglePokemonConfirmed(false));
  };

  return (
    <div className="editPokemonBottomRow">
      <Button
        text={"Save"}
        buttonClassName={"editPokemonBottomRowbutton"}
        onClick={() => addPokemonToTeam()}
      />
      <Button
        text={"Cancel"}
        buttonClassName={"editPokemonBottomRowbutton"}
        onClick={cancelButton}
      />
    </div>
  );
};

export default EditPokemonBottomRow;
