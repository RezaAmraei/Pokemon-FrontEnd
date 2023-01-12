import React, { useState } from "react";
import ColumnOfPokeBalls from "../Components/ColumnOfPokeBalls";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import EditPokemon from "../Components/Build/EditPokemon/EditPokemon";
import "../CSS/Main.css";
import "../CSS/Create-Team.css";
import PokeMonChecker from "../Components/Build/PokeMonChecker";
import Button from "../Components/Button/Button";

const Create = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [addPokemon, setAddPokemon] = useState(null);
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        <span className="createTeamFont createTeamHeader">Pick your team!</span>

        <div className="createTeamMiddleCol">
          {buttonClicked && (
            <SearchBar home={false} setAddPokemon={setAddPokemon} />
          )}
          {addPokemon && (
            <PokeMonChecker
              addPokemon={addPokemon}
              setButtonClicked={setButtonClicked}
              setAddPokemon={setAddPokemon}
            />
          )}
          {!buttonClicked && (
            <Button
              text={"Add Pokemon"}
              secondaryText={"+"}
              buttonClassName={"pokemonButton"}
              onClick={() => setButtonClicked(true)}
            />
          )}
          {addPokemon && <EditPokemon addPokemon={addPokemon} />}
        </div>
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Create;
