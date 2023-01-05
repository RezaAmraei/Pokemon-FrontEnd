import React from "react";
import ColumnOfPokeBalls from "../Components/ColumnOfPokeBalls";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import "../CSS/Main.css";
import "../CSS/Create-Team.css";

const Create = () => {
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        <span className="createTeamFont createTeamHeader">Pick your team!</span>
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Create;
