import React, { useState } from "react";
import ColumnOfPokeBalls from "../../Components/ColumnOfPokeBalls";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";
import EditPokemon from "../../Components/Build/EditPokemon/EditPokemon";

import "./Create-Team.css";
import PokeMonChecker from "../../Components/Build/PokeMonChecker";
import Button from "../../Components/Button/Button";

const Create = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [pokemonConfirmed, setPokemonConfirmed] = useState(false);
  const [showConfirmPokemon, setShowConfirmPokemon] = useState(true);
  const [addPokemon, setAddPokemon] = useState(null);
  function clickButton() {
    setButtonClicked(true);
  }
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        <span className="createTeamFont createTeamHeader">Pick your team!</span>
        <div className="createCurrentTeam"></div>
        <div className="createTeamMiddleCol">
          {buttonClicked && (
            <SearchBar home={false} setAddPokemon={setAddPokemon} />
          )}
          {addPokemon && showConfirmPokemon && (
            <PokeMonChecker
              addPokemon={addPokemon}
              setButtonClicked={setButtonClicked}
              setShowConfirmPokemon={setShowConfirmPokemon}
              setPokemonConfirmed={setPokemonConfirmed}
            />
          )}
          {!buttonClicked && (
            <Button
              text={"Add Pokemon"}
              secondaryText={"+"}
              buttonClassName={"pokemonButton"}
              onClick={clickButton}
            />
          )}
          {pokemonConfirmed && <EditPokemon addPokemon={addPokemon} />}
        </div>
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Create;
