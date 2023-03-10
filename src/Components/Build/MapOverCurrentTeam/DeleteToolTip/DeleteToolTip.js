import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "../mapOverCurrentTeam.css";

export default function DeleteToolTip({ pokemonImage }) {
  return (
    <Tooltip title="Delete" arrow>
      <Button>
        <img src={pokemonImage} className="mapOverCurrentTeamImage" />
      </Button>
    </Tooltip>
  );
}
