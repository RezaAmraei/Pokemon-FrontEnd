import React, { useState, useEffect } from "react";
import EditPokemonTopRow from "./TopRow/EditPokemonTopRow";
import EditPokemonMiddleRow from "./MiddleRow/EditPokemonMiddleRow";
import EditPokemonBottomRow from "./BottomRow/EditPokemonBottomRow";
import EditPokemonListMenu from "../EditPokemonListMenu/EditPokemonListMenu";
import "./EditPokemon.css";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonToParty } from "../../../redux/partySlice";
import {
  selectEditListMenuShown,
  selectParty,
  selectList,
} from "../../../redux/selectors";

const EditPokemon = ({ addPokemon }) => {
  const dispatch = useDispatch();
  const party = useSelector(selectParty);
  const editListMenuShown = useSelector(selectEditListMenuShown);
  const list = useSelector(selectList);

  const [currentInput, setCurrentInput] = useState("");
  const moves = addPokemon.moves;
  const abilities = addPokemon.abilities;

  const [moveset, setMoveset] = useState(["", "", "", ""]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ability, setAbility] = useState("");

  const [pokemonToAdd, setPokemonToAdd] = useState({
    id: addPokemon.id,
    name: addPokemon.name,
    image: addPokemon.sprites,
    moveset,
    ability,
  });

  return (
    <div className="editPokemon">
      <div className="editPokemonRows">
        {/* After everything is complete look into redux to clean up code */}
        <EditPokemonTopRow
          addPokemon={addPokemon}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          moves={moves}
          moveset={moveset}
          setCurrentMove={setCurrentMove}
        />
        <EditPokemonMiddleRow
          addPokemon={addPokemon}
          abilities={abilities}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          ability={ability}
        />
        <EditPokemonBottomRow
          pokemonToAdd={pokemonToAdd}
          setPokemonToAdd={setPokemonToAdd}
          moveset={moveset}
          ability={ability}
          currPokemon={addPokemon}
        />
      </div>

      {editListMenuShown && (
        <EditPokemonListMenu
          moveset={moveset}
          setMoveset={setMoveset}
          currentMove={currentMove}
          setAbility={setAbility}
        />
      )}
    </div>
  );
};

export default EditPokemon;
