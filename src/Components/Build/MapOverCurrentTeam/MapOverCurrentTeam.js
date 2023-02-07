import React from "react";

const MapOverCurrentTeam = ({ index }) => {
  const currentTeam = JSON.parse(localStorage.getItem("teams"))[index].team;
  return (
    <>
      {currentTeam.map((pokemon) => {
        return <div>{pokemon.name}</div>;
      })}
    </>
  );
};

export default MapOverCurrentTeam;
