import React, { useState } from "react";
import ColumnOfPokeBalls from "../Components/ColumnOfPokeBalls";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import "../CSS/Main.css";
import "../CSS/Create-Team.css";
import AddIcon from "@mui/icons-material/Add";

const Create = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [addPokemon, setAddPokemon] = useState({});
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
          <button
            className="createTeamButton"
            onClick={() => setButtonClicked(true)}
          >
            <span>+</span> Add Pokemon
          </button>
        </div>
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Create;
