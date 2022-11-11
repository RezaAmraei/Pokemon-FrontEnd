import React, { useState } from "react";
import "../CSS/SearchBar.css";
import PokeAPIFunction from "../Utils/PokeAPIFunction";
import DetermineHowManyTypes from "../Utils/DetermineHowManyTypes";
const SearchBar = ({
  pokemonForSearchBar,
  setPokemonForSearchBar,
  pokemonDisplay,
  setPokemonDisplay,
  setTypes,
  types,
}) => {
  const apiFunction = async function (pokemon) {
    console.log(await PokeAPIFunction("pokemon", pokemon));
    let pokemonTest = await PokeAPIFunction("pokemon", pokemon);

    setPokemonDisplay(pokemonTest);
    let typesFunctionResult = DetermineHowManyTypes(pokemonTest);
    setTypes([typesFunctionResult[0], typesFunctionResult[1]]);
  };
  return (
    <div id="searchBar">
      <div id="searchBarHeader">
        <span className={types ? `${types[0]}` : ""}>Search through </span>{" "}
        <span className={types ? `${types[1]}` : ""}> your PokeDex!</span>
      </div>
      <div className="searchBarInputFieldAndButton">
        <input
          type="text"
          list="pokemon"
          placeholder="Search through Pokemon name or their ID!"
          className="searchBarInput"
          onChange={(e) => setPokemonForSearchBar(e.target.value)}
        />
        <button onClick={() => apiFunction(pokemonForSearchBar)}>Find!</button>
      </div>
    </div>
  );
};

export default SearchBar;
