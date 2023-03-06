import React from "react";
import "./ShowTeams.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetParty } from "../../../redux/partySlice";

const ShowTeams = () => {
  const localStorageParty = JSON.parse(localStorage.getItem("teams"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nav = (index) => {
    navigate(`/create-team/${index}`);
  };
  const deleteParty = () => {};

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
              <div className="showTeamsIcons">
                <div
                  onClick={() => {
                    nav(i);
                    dispatch(resetParty(localStorageParty[i].team));
                  }}
                >
                  <EditIcon
                    sx={{ height: "80px", color: "rgb(233, 233, 233)" }}
                  />
                </div>
                <div>
                  <DeleteIcon
                    sx={{ height: "80px", color: "rgb(233, 233, 233)" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="showTeamsButtonDiv">
        <button
          className="showTeamsButton"
          onClick={() => nav(localStorageParty.length)}
        >
          Create New Team
        </button>
      </div>
    </div>
  );
};

export default ShowTeams;
