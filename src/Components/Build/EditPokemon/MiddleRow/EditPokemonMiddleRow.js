import React from "react";
import PokemonTypeBox from "../../../PokemonTypeBox/PokemonTypeBox";
import EditPokemonInputField from "../../EditPokemonInputField/EditPokemonInputField";
import UpperCaseFirstLetter from "../../../../Utils/UpperCaseFirstLetter";
import "../EditPokemon.css";
import { useSelector } from "react-redux";
import { selectAddPokemon } from "../../../../redux/selectors";

const EditPokemonMiddleRow = ({
  editListMenuShown,
  setEditListMenuShown,
  list,
  setList,
  currentInput,
  setCurrentInput,
  abilities,
  ability,
}) => {
  const addPokemon = useSelector(selectAddPokemon);
  let pokemonTypes = {
    "Type(s)":
      addPokemon.types.length === 2
        ? [addPokemon.types[0].type.name, addPokemon.types[1].type.name]
        : [addPokemon.types[0].type.name],
  };
  return (
    <div className="editPokemonMiddleRow">
      <div className="editPokemonName white">
        {UpperCaseFirstLetter(addPokemon.name)}
      </div>
      <div className="editPokemonTypes white">
        {pokemonTypes["Type(s)"].map((type, i) => {
          return <PokemonTypeBox type={type} key={i} />;
        })}
      </div>

      <div className="editPokemonAbility">
        <EditPokemonInputField
          placeholder={"Ability"}
          className={"editPokemonMoveset"}
          setEditListMenuShown={setEditListMenuShown}
          editListMenuShown={editListMenuShown}
          setList={setList}
          list={list}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          display={abilities}
          ability={ability}
        />
      </div>
    </div>
  );
};

export default EditPokemonMiddleRow;
