import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { setListOfTeamsFromLocalStorage } from "../../../redux/partySlice";
import "./confirmDeleteTeam.css";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConfirmDeleteTeam = ({
  teamName,
  index,
  localStorageParty,
  setParties,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const deleteTeam = () => {
    const tempArr = [...localStorageParty];
    console.log(tempArr);
    tempArr.splice(index, 1);
    setParties(tempArr);
    handleClose();
    if (tempArr.length === 0) {
      dispatch(setListOfTeamsFromLocalStorage([]));
      localStorage.setItem("teams", JSON.stringify([]));
      return;
    }
    localStorage.setItem("teams", JSON.stringify(tempArr));
  };
  return (
    <div>
      <DeleteIcon
        sx={{ height: "80px", color: "rgb(233, 233, 233)" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="deleteTeamModal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete {teamName}?
          </Typography>
          <div className="deleteTeamButtonsDiv">
            <button className="deleteTeamButton" onClick={handleClose}>
              Cancel
            </button>
            <button
              className="deleteTeamButton"
              id="deleteTeamDeleteButton"
              onClick={deleteTeam}
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmDeleteTeam;
