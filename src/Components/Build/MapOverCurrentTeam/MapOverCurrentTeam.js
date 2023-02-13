import React from "react";
import { useSelector } from "react-redux";
import { selectParty } from "../../../redux/selectors";

const MapOverCurrentTeam = ({ index }) => {
  const currentTeam = useSelector(selectParty);
  //const currentTeam = JSON.parse(localStorage.getItem("teams"))[index].team;
  return (
    <>
      {currentTeam.map((pokemon, i) => {
        return <div key={i}>{pokemon.name}</div>;
      })}
    </>
  );
};

export default MapOverCurrentTeam;
