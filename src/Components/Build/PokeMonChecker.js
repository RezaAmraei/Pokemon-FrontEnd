import React from "react";
import "../../CSS/PokeMonChecker.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import UpperCaseFirstLetter from "../../Utils/UpperCaseFirstLetter";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddPokemon,
  togglePokemonConfirmed,
  toggleSearchBarButton,
} from "../../redux/partySlice";
import { selectAddPokemon } from "../../redux/selectors";

const PokeMonChecker = ({ setShowConfirmPokemon }) => {
  const dispatch = useDispatch();
  const addPokemon = useSelector(selectAddPokemon);
  function cancelButton() {
    dispatch(setAddPokemon(null));
    dispatch(toggleSearchBarButton(true));
  }

  function confirmButton() {
    dispatch(togglePokemonConfirmed(true));
    setShowConfirmPokemon(false);
    dispatch(toggleSearchBarButton(false));
  }
  return (
    <div className="pokeMonChecker ">
      <div className="pokeMonCheckerImage">
        <img src={addPokemon.sprites.front_default} />
      </div>
      <div className="pokeMonCheckerName">
        <span>{UpperCaseFirstLetter(addPokemon.name)}</span>
      </div>
      <div className="addPokemonIcons">
        <div>
          <CheckIcon
            sx={{
              fontSize: "40px",
              color: "rgb(233, 233, 233)",
              border: "1px solid rgb(233, 233, 233)",
              borderRadius: "25px",
              padding: "1px",
            }}
            onClick={confirmButton}
          />
        </div>
        <div>
          <CloseIcon
            sx={{
              fontSize: "40px",
              color: "rgb(233, 233, 233)",
              border: "1px solid rgb(233, 233, 233)",
              borderRadius: "25px",
              padding: "1px",
            }}
            onClick={cancelButton}
          />
        </div>
      </div>
    </div>
  );
};

export default PokeMonChecker;
