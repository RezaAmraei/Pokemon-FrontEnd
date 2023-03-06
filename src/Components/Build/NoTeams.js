import React from "react";
import "../../CSS/NoTeams.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const NoTeams = () => {
  const navigate = useNavigate();
  function createTeam() {
    navigate("/create-team/0");
  }
  return (
    <div className="noTeams">
      <div className="noTeamsHeader noTeamsFont">
        You Have No Teams Available!
      </div>
      <div className="noTeamsFont noTeamsStartBuilding" onClick={createTeam}>
        Click{" "}
        <span id="noTeamsUnderline" className="noTeamsFont">
          here
        </span>
        &nbsp;to start building a team
      </div>

      <div className="noTeamCreateButtonDiv">
        <Button
          className="noTeamCreateButton"
          text={"Create Team"}
          buttonClassName={"buttonCreateTeam"}
          onClick={createTeam}
        />
      </div>
    </div>
  );
};

export default NoTeams;
