import React from "react";
import { useSelector } from "react-redux";
import { selectList } from "../../../redux/selectors";
import "./EditPokemonListMenu.css";

const EditPokemonListMenu = ({
  moveset,
  setMoveset,
  currentMove,
  setAbility,
}) => {
  const list = useSelector(selectList);
  function setMove(move) {
    let temp = [...moveset];
    temp[currentMove] = move.name;
    setMoveset(temp);
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
