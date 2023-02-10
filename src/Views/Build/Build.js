import React from "react";
import ColumnOfPokeBalls from "../../Components/ColumnOfPokeBalls";
import NavBar from "../../Components/NavBar";

import "../../CSS/Main.css";
import NoTeams from "../../Components/Build/NoTeams";
import ShowTeams from "../../Components/Build/ShowTeams/ShowTeams";

const Build = () => {
  //localStorage.removeItem("teams");
  const localStorageParty = JSON.parse(localStorage.getItem("teams"));

  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        {localStorageParty ? <ShowTeams /> : <NoTeams />}
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Build;
