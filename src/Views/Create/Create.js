import React, { useState } from "react";
import ColumnOfPokeBalls from "../../Components/ColumnOfPokeBalls";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";
import EditPokemon from "../../Components/Build/EditPokemon/EditPokemon";
import "./Create-Team.css";
import PokeMonChecker from "../../Components/Build/PokeMonChecker";
import Button from "../../Components/Button/Button";
import MapOverCurrentTeam from "../../Components/Build/MapOverCurrentTeam/MapOverCurrentTeam";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddPokemon,
  selectParty,
  selectPokemonConfirmed,
  selectSearchButtonShowButton,
} from "../../redux/selectors";
import { toggleSearchBarButton } from "../../redux/partySlice";

const Create = () => {
  const dispatch = useDispatch();

  const searchButtonShowButton = useSelector(selectSearchButtonShowButton);
  const pokemonConfirmed = useSelector(selectPokemonConfirmed);
  const [showConfirmPokemon, setShowConfirmPokemon] = useState(true);
  const [addPokemonButton, setAddPokemonButton] = useState(true);
  const addPokemon = useSelector(selectAddPokemon);
  const party = useSelector(selectParty);

  function clickButton() {
    dispatch(toggleSearchBarButton(true));
    setAddPokemonButton(false);
  }
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        <span className="createTeamFont createTeamHeader">Pick your team!</span>

        <div className="createTeamMiddleCol">
          {/* Search Bar for when Add Pokemon is Clicked */}
          {searchButtonShowButton && <SearchBar home={false} />}

          {/* Map Over Current Pokemon in Team */}
          {party[0] && (
            <div className="createCurrentTeam">
              <MapOverCurrentTeam index={0} />
            </div>
          )}

          {/* Div to confirm that this is the currect Pokeon You want to edit */}
          {addPokemon && showConfirmPokemon && (
            <PokeMonChecker
              addPokemon={addPokemon}
              setShowConfirmPokemon={setShowConfirmPokemon}
            />
          )}
          {/* Button to confirm youre ready to start building your team */}
          {addPokemonButton && (
            <Button
              text={"Add Pokemon"}
              secondaryText={"+"}
              buttonClassName={"pokemonButton"}
              onClick={clickButton}
            />
          )}

          {/* Div to edit pokemons move and abilities */}
          {pokemonConfirmed && <EditPokemon addPokemon={addPokemon} />}
        </div>
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Create;
