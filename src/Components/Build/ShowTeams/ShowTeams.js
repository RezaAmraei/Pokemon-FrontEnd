import React from "react";
import "./ShowTeams.css";
import EditIcon from "@mui/icons-material/Edit";

const ShowTeams = () => {
  const localStorageParty = JSON.parse(localStorage.getItem("teams"));
  const test = "";
  if (!test) console.log("empty string is false");
  return (
    <div className="showTeams">
      <span className="showTeamsHeader">Here your teams!</span>

      <div className="showTeamsMap">
        {localStorageParty.map((team, i) => {
          return (
            <div key={i} className="showTeamsTeam">
              <div className="showTeamsTeamName">
                {team.teamName || `Team ${i + 1}`}
              </div>
              <div className="showTeamsImages">
                {team.team.map((pokemon, i) => {
                  return <img key={i} src={pokemon.image.front_default} />;
                })}
              </div>
              <EditIcon sx={{ height: "80px" }} />
            </div>
          );
        })}
      </div>
      <div className="showTeamsButtonDiv">
        <button className="showTeamsButton">Create New Team</button>
      </div>
    </div>
  );
};

export default ShowTeams;
