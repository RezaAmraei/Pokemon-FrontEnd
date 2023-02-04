import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectList, selectCurrentMove } from "../../../redux/selectors";
import { setMoveset } from "../../../redux/partySlice";
import "./EditPokemonListMenu.css";

const EditPokemonListMenu = ({ setAbility }) => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const currentMove = useSelector(selectCurrentMove);
  function setMove(move) {
    dispatch(setMoveset({ move: move.name, index: currentMove }));
  }
  function setAbilityFunc(obj) {
    setAbility(obj.name);
  }
  return (
    <div className="editPokemonListMenu">
      {list.map((obj, i) => {
        return (
          <div
            key={i}
            className="editPokemonListMenuPossibleOption"
            onClick={() =>
              obj.move ? setMove(obj.move) : setAbilityFunc(obj.ability)
            }
          >
            {obj.move ? obj.move.name : obj.ability.name}
          </div>
        );
      })}
    </div>
  );
};

export default EditPokemonListMenu;
