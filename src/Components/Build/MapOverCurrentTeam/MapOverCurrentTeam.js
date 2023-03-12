import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { selectParty, selectListOfTeams } from "../../../redux/selectors";
import { resetParty, changeTeamName } from "../../../redux/partySlice";
import UpperCaseFirstLetter from "../../../Utils/UpperCaseFirstLetter.js";
import ConfirmDelete from "../../Modals/ConfirmDelete/ConfirmDelete";
import DoneIcon from "@mui/icons-material/Done";
import "./mapOverCurrentTeam.css";

const MapOverCurrentTeam = () => {
  const { teamNumber } = useParams();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const party = useSelector(selectParty);

  useEffect(() => {
    if (checkIfThereAreParties && allParties[teamNumber]) {
      console.log(allParties[teamNumber]);
      dispatch(resetParty(allParties[teamNumber].team));
    }
  }, [teamNumber]);

  const allParties = useSelector(selectListOfTeams);
  const checkIfThereAreParties = allParties.length > 0;
  const checkIfThereIsTeamNames = checkIfThereAreParties
    ? allParties[teamNumber] && allParties[teamNumber].teamName
    : false;
  const ifNoName = `Team ${parseInt(teamNumber) + 1}`;
  const [teamName, setTeamName] = useState(checkIfThereIsTeamNames || ifNoName);
  const [disableInput, setDisableInput] = useState(true);

  const editButtonFunction = async () => {
    await setDisableInput(!disableInput);
    inputRef.current.focus();
  };

  const newNameFunction = () => {
    const removeSpacesFromName = teamName.replace(/\s/g, "");
    dispatch(
      changeTeamName({
        index: teamNumber,
        newName: removeSpacesFromName === "" ? ifNoName : removeSpacesFromName,
      })
    );
    if (removeSpacesFromName === "") setTeamName(ifNoName);
    setDisableInput(!disableInput);
  };
  return (
    <div className="mapOverCurrentTeam">
      <div className="mapOverCurrentTeamNameAndButton">
        <span className="mapOverCurrentTeamName">
          <input
            disabled={disableInput}
            ref={inputRef}
            className="mapOverCurrentTeamName"
            value={teamName}
            onChange={(e) => {
              if (
                teamName.length <= 13 ||
                e.nativeEvent.inputType === "deleteContentBackward"
              )
                setTeamName(e.target.value);
            }}
          />
        </span>

        {disableInput ? (
          <EditIcon
            sx={{ color: "rgb(233, 233, 233)" }}
            className="pointer"
            onClick={editButtonFunction}
          />
        ) : (
          <DoneIcon
            sx={{ color: "rgb(233, 233, 233)" }}
            onClick={newNameFunction}
            className="pointer"
          />
        )}
      </div>
      <div className="mapOverCurrentTeamWholeParty">
        {party.map((pokemon, i) => {
          return (
            <div key={i} className="flex">
              <ConfirmDelete
                nameThatIsBeingDeleted={UpperCaseFirstLetter(pokemon.name)}
                index={i}
                arrayToDeleteFrom={party}
                teamOrPokemon={"pokemon"}
                pokemonImage={pokemon.image.front_default}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapOverCurrentTeam;
