import React from "react";
import ColumnOfPokeBalls from "../Components/ColumnOfPokeBalls";
import NavBar from "../Components/NavBar";

import "../CSS/Main.css";
import NoTeams from "../Components/Build/NoTeams";

const Build = () => {
  // localStorage.removeItem("teams");
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        {JSON.parse(localStorage.getItem("teams")) ? (
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
