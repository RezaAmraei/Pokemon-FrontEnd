import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "../mapOverCurrentTeam.css";

export default function EditToolTip({ pokemonImage }) {
  return (
    <Tooltip title="Edit" arrow>
      <Button>
        <img src={pokemonImage} className="mapOverCurrentTeamImage" />
      </Button>
    </Tooltip>
  );
}
