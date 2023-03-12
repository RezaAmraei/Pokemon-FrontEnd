import React, { useState } from "react";
import ColumnOfPokeBalls from "../../Components/ColumnOfPokeBalls";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";
import EditPokemon from "../../Components/Build/EditPokemon/EditPokemon";
import "./Create-Team.css";
import PokeMonChecker from "../../Components/Build/PokeMonChecker";
import Button from "../../Components/Button/Button";
import MapOverCurrentTeam from "../../Components/Build/MapOverCurrentTeam/MapOverCurrentTeam";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddPokemon,
  selectCurrentTeam,
  selectParty,
  selectPokemonConfirmed,
  selectSearchButtonShowButton,
  selectAddPokemonButton,
  selectShowConfirmPokemon,
} from "../../redux/selectors";
import {
  toggleSearchBarButton,
  toggleAddPokemonButton,
} from "../../redux/partySlice";

const Create = () => {
  const currentTeam = useSelector(selectCurrentTeam);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchButtonShowButton = useSelector(selectSearchButtonShowButton);
  const pokemonConfirmed = useSelector(selectPokemonConfirmed);
  const showConfirmPokemon = useSelector(selectShowConfirmPokemon);
  const addPokemonButton = useSelector(selectAddPokemonButton);
  const addPokemon = useSelector(selectAddPokemon);
  const party = useSelector(selectParty);

  const { teamNumber } = useParams();

  function clickButton() {
    dispatch(toggleSearchBarButton(true));
    dispatch(toggleAddPokemonButton());
  }

  const doneButton = () => {
    navigate("/build");
  };
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        <span className="createTeamFont createTeamHeader">Pick your team!</span>

        <div className="createTeamMiddleCol">
          {/* Map Over Current Pokemon in Team */}
          {party && <MapOverCurrentTeam index={teamNumber} />}
          {/* Search Bar for when Add Pokemon is Clicked */}
          {searchButtonShowButton && <SearchBar home={false} />}

          {/* Div to confirm that this is the currect Pokeon You want to edit */}
          {addPokemon && showConfirmPokemon && <PokeMonChecker />}
          {/* Button to confirm youre ready to start building your team */}

          <div className="flex createTeamButtonsDiv">
            {addPokemonButton && (
              <Button
                text={"Add Pokemon"}
                secondaryText={"+"}
                buttonClassName={"pokemonButton"}
                onClick={clickButton}
              />
            )}
            <Button
              text={"Done"}
              buttonClassName={"pokemonButton doneButton"}
              onClick={doneButton}
            />
          </div>

          {/* Div to edit pokemons move and abilities */}
          {pokemonConfirmed && <EditPokemon addPokemon={addPokemon} />}
        </div>
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Create;
