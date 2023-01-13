import React from "react";
import PokemonTypeBox from "../../../PokemonTypeBox/PokemonTypeBox";
import EditPokemonInputField from "../../EditPokemonInputField/EditPokemonInputField";
import UpperCaseFirstLetter from "../../../../Utils/UpperCaseFirstLetter";
import "../EditPokemon.css";

const EditPokemonMiddleRow = ({ addPokemon }) => {
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
        />
      </div>
    </div>
  );
};

export default EditPokemonMiddleRow;
