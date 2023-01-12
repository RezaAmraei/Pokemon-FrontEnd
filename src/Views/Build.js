import React, { useState } from "react";
import ColumnOfPokeBalls from "../Components/ColumnOfPokeBalls";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import "../CSS/Main.css";
import NoTeams from "../Components/Build/NoTeams";

const Build = () => {
  localStorage.setItem("test", undefined);

  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        {localStorage.getItem("teams") ? (
          <div> Heres your team </div>
        ) : (
          <NoTeams />
        )}
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Build;
