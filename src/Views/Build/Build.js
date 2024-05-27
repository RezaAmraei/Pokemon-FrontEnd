import React from "react";
import ColumnOfPokeBalls from "../../Components/ColumnOfPokeBalls";
import NavBar from "../../Components/NavBar";
import "../../CSS/Main.css";
import NoTeams from "../../Components/Build/NoTeams";
import ShowTeams from "../../Components/Build/ShowTeams/ShowTeams";
import { useSelector, useDispatch } from "react-redux";
import { selectListOfTeams } from "../../redux/selectors";
import { resetReduxUI } from "../../redux/partySlice";

const Build = () => {
  //localStorage.removeItem("teams");
  const dispatch = useDispatch();
  const localStorageParty = useSelector(selectListOfTeams);
  //dispatch(resetPokemon());
  dispatch(resetReduxUI());

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
