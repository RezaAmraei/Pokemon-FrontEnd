import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetParty } from "../../../redux/partySlice";
import ConfirmDeleteTeam from "../../Modals/ConfirmDeleteTeam/ConfirmDeleteTeam";
import "./ShowTeams.css";

const ShowTeams = () => {
  const localStorageParty = JSON.parse(localStorage.getItem("teams"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [parties, setParties] = useState([...localStorageParty]);
  const nav = (index) => {
    navigate(`/create-team/${index}`);
  };

  return (
    <>
      {localStorageParty && localStorageParty.length > 0 && (
        <div className="showTeams">
          <span className="showTeamsHeader">Here your teams!</span>

          <div className="showTeamsMap">
            {parties.map((team, i) => {
              const teamName = team.teamName || `Team ${i + 1}`;
              return (
                <div key={i} className="showTeamsTeam">
                  <div className="showTeamsTeamName">{teamName}</div>
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
                      <ConfirmDeleteTeam
                        teamName={teamName}
                        index={i}
                        localStorageParty={localStorageParty}
                        setParties={setParties}
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
      )}
    </>
  );
};

export default ShowTeams;
