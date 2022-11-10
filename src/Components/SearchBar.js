import React, { useState } from "react";
import "../CSS/SearchBar.css";
import PokeAPIFunction from "../Utils/PokeAPIFunction";

const SearchBar = ({ pokemonForSearchBar, setPokemonForSearchBar }) => {
  const apiFunction = async function (pokemon) {
    console.log(await PokeAPIFunction("pokemon", pokemon));
  };
  return (
    <div id="searchBar">
      <div id="searchBarHeader">Search through your PokeDex!</div>
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
