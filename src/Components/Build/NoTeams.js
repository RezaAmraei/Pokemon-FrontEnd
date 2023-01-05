import React from "react";
import "../../CSS/NoTeams.css";
import { useNavigate } from "react-router-dom";
const NoTeams = () => {
  const navigate = useNavigate();
  function createTeam() {
    navigate("/create-team");
  }
  return (
    <div className="noTeams">
      <div className="noTeamsHeader noTeamsFont">
        You Have No Teams Available!
      </div>
      <div className="noTeamsFont noTeamsStartBuilding" onClick={createTeam}>
        Click here to start building a team
      </div>

      <div className="noTeamCreateButtonDiv">
        <button className="noTeamCreateButton " onClick={createTeam}>
          Create Team
        </button>
      </div>
    </div>
  );
};

export default NoTeams;
