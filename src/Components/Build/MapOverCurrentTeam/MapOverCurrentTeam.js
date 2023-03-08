import React from "react";
import { useSelector } from "react-redux";
import { selectParty, selectCurrentTeam } from "../../../redux/selectors";

const MapOverCurrentTeam = ({ index }) => {
  const currentTeamIndex = useSelector(selectCurrentTeam);
  // const currentTeam = JSON.parse(localStorage.getItem("teams"))[
  //   currentTeamIndex
  // ].team;
  const party = useSelector(selectParty);
  console.log(party);
  return (
    <>
      {party.map((pokemon, i) => {
        return <div key={i}>{pokemon.name}</div>;
      })}
    </>
  );
};

export default MapOverCurrentTeam;
