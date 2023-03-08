import React, { useState } from "react";
import ColumnOfPokeBalls from "../../Components/ColumnOfPokeBalls";
import NavBar from "../../Components/NavBar";
import "../../CSS/Main.css";
import NoTeams from "../../Components/Build/NoTeams";
import ShowTeams from "../../Components/Build/ShowTeams/ShowTeams";
import { useSelector } from "react-redux";
import { selectListOfTeams } from "../../redux/selectors";

const Build = () => {
  //localStorage.removeItem("teams");
  const localStorageParty = useSelector(selectListOfTeams);
  console.log(localStorageParty);

  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        {localStorageParty && localStorageParty.length ? (
          <ShowTeams />
        ) : (
          <NoTeams />
        )}
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Build;
