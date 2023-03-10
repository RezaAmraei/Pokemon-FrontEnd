import React from "react";
import { useSelector } from "react-redux";
import { selectMoveset } from "../../../../redux/selectors";
import Button from "../../../Button/Button";
import "../EditPokemon.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addPokemonToParty,
  setMoveset,
  togglePokemonConfirmed,
  toggleSearchBarButton,
  saveButtonPressed,
  setListOfTeamsFromLocalStorage,
  toggleAddPokemonButton,
} from "../../../../redux/partySlice";

const EditPokemonBottomRow = ({ currPokemon, ability }) => {
  const moveset = useSelector(selectMoveset);
  const dispatch = useDispatch();

  const { teamNumber } = useParams();

  function addPokemonToTeam() {
    const pokemonToAdd = {
      id: currPokemon.id,
      name: currPokemon.name,
      image: currPokemon.sprites,
      moveset,
      ability,
    };
    let temp = JSON.parse(localStorage.getItem("teams"));

    if (temp) {
      if (temp[teamNumber]) {
        temp[teamNumber].team.push(pokemonToAdd);
        localStorage.setItem("teams", JSON.stringify(temp));
        dispatch(setListOfTeamsFromLocalStorage(temp));
        dispatch(addPokemonToParty(pokemonToAdd));
      } else {
        temp[teamNumber] = {
          teamName: "",
          team: [pokemonToAdd],
        };
        localStorage.setItem("teams", JSON.stringify(temp));
        dispatch(addPokemonToParty(pokemonToAdd));
        dispatch(setListOfTeamsFromLocalStorage(temp));
      }
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
      dispatch(
        setListOfTeamsFromLocalStorage(
          JSON.parse(localStorage.getItem("teams"))
        )
      );
    }
    dispatch(toggleAddPokemonButton());
    dispatch(saveButtonPressed());
  }

  const cancelButton = function () {
    dispatch(toggleSearchBarButton(true));
    dispatch(setMoveset("reset"));
    dispatch(togglePokemonConfirmed(false));
    dispatch(toggleAddPokemonButton());
    dispatch(saveButtonPressed());
  };

  return (
    <div className="editPokemonBottomRow">
      <Button
        text={"Save"}
        buttonClassName={"editPokemonBottomRowbutton"}
        onClick={addPokemonToTeam}
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
