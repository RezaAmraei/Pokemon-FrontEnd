import React, { useState } from "react";
import ColumnOfPokeBalls from "../../Components/ColumnOfPokeBalls";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";
import EditPokemon from "../../Components/Build/EditPokemon/EditPokemon";
import "./Create-Team.css";
import PokeMonChecker from "../../Components/Build/PokeMonChecker";
import Button from "../../Components/Button/Button";
import MapOverCurrentTeam from "../../Components/Build/MapOverCurrentTeam/MapOverCurrentTeam";
import { useSelector } from "react-redux";
import { selectAddPokemon } from "../../redux/selectors";

const Create = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [pokemonConfirmed, setPokemonConfirmed] = useState(false);
  const [showConfirmPokemon, setShowConfirmPokemon] = useState(true);
  const addPokemon = useSelector(selectAddPokemon);
  function clickButton() {
    setButtonClicked(true);
  }
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        <span className="createTeamFont createTeamHeader">Pick your team!</span>
        {/* Map Over Current Pokemon in Team */}
        {localStorage.getItem("teams") && (
          <div className="createCurrentTeam">
            <MapOverCurrentTeam index={0} />
          </div>
        )}

        <div className="createTeamMiddleCol">
          {/* Search Bar for when Add Pokemon is Clicked */}
          {buttonClicked && <SearchBar home={false} />}

          {/* Div to confirm that this is the currect Pokeon You want to edit */}
          {addPokemon && showConfirmPokemon && (
            <PokeMonChecker
              addPokemon={addPokemon}
              setButtonClicked={setButtonClicked}
              setShowConfirmPokemon={setShowConfirmPokemon}
              setPokemonConfirmed={setPokemonConfirmed}
            />
          )}
          {/* Button to confirm youre ready to start building your team */}
          {!buttonClicked && (
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
