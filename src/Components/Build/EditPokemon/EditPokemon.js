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
  selectAddPokemon,
} from "../../../redux/selectors";

const EditPokemon = () => {
  const dispatch = useDispatch();
  const party = useSelector(selectParty);
  const moveset = useSelector(selectMoveset);
  const editListMenuShown = useSelector(selectEditListMenuShown);
  const addPokemon = useSelector(selectAddPokemon);

  const moves = addPokemon.moves;
  const abilities = addPokemon.abilities;

  const [ability, setAbility] = useState("");

  return (
    <div className="editPokemon">
      <div className="editPokemonRows">
        <EditPokemonTopRow moves={moves} />
        <EditPokemonMiddleRow abilities={abilities} ability={ability} />
        <EditPokemonBottomRow ability={ability} currPokemon={addPokemon} />
      </div>

      {editListMenuShown && <EditPokemonListMenu setAbility={setAbility} />}
    </div>
  );
};

export default EditPokemon;
