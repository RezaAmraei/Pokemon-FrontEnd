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
  selectMoveset,
} from "../../../redux/selectors";

const EditPokemon = ({ addPokemon }) => {
  const dispatch = useDispatch();
  const party = useSelector(selectParty);
  const moveset = useSelector(selectMoveset);
  const editListMenuShown = useSelector(selectEditListMenuShown);

  const moves = addPokemon.moves;
  const abilities = addPokemon.abilities;

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
        <EditPokemonTopRow addPokemon={addPokemon} moves={moves} />
        <EditPokemonMiddleRow
          addPokemon={addPokemon}
          abilities={abilities}
          ability={ability}
        />
        <EditPokemonBottomRow
          pokemonToAdd={pokemonToAdd}
          setPokemonToAdd={setPokemonToAdd}
          ability={ability}
          currPokemon={addPokemon}
        />
      </div>

      {editListMenuShown && <EditPokemonListMenu setAbility={setAbility} />}
    </div>
  );
};

export default EditPokemon;
