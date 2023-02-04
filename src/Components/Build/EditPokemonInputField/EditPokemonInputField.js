import React, { useState, useEffect } from "react";
import {
  selectEditListMenuShown,
  selectCurrentInput,
  selectMoveset,
} from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import "./EditPokemonInputField.css";
import {
  toggleEditListMenuShown,
  setList,
  setCurrentInput,
  setCurrentMove,
  setMoveset,
} from "../../../redux/partySlice";

const EditPokemonInputField = ({
  placeholder,
  className,
  display,
  index,
  ability,
}) => {
  const dispatch = useDispatch();
  const editListMenuShown = useSelector(selectEditListMenuShown);
  const currentInput = useSelector(selectCurrentInput);
  const moveset = useSelector(selectMoveset);

  const checkIfMove =
    placeholder.substring(0, 4) === "Move" ? moveset[index] : ability;
  const ifCheck = placeholder.substring(0, 4) === "Move";
  const [value, setValue] = useState(checkIfMove);

  useEffect(() => {
    if (ifCheck) setValue(moveset[index]);
    if (!ifCheck) setValue(ability);
  }, [moveset, ability]);

  function clickedOn() {
    if (currentInput != placeholder) {
      dispatch(setList(display));
      dispatch(setCurrentInput(placeholder));
      if (ifCheck) dispatch(setCurrentMove(index));
    }
    if (!editListMenuShown) {
      dispatch(toggleEditListMenuShown());
    }
  }
  function filterList(e) {
    if (e.length > 0) {
      dispatch(
        setList(
          display.filter((obj) => {
            if (ifCheck) {
              return obj.move.name.slice(0, e.length) === e.toLowerCase();
            } else {
              return obj.ability.name.slice(0, e.length) === e.toLowerCase();
            }
          })
        )
      );
    } else {
      dispatch(setList(display));
    }
    setValue(e);
  }
  return (
    <input
      placeholder={placeholder}
      onFocus={clickedOn}
      className={className}
      value={value}
      onChange={(e) => filterList(e.target.value)}
    />
  );
};

export default EditPokemonInputField;
