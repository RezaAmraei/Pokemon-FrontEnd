import React, { useState } from "react";
import "../CSS/SearchBar.css";
import PokeAPIFunction from "../Utils/PokeAPIFunction";
import DetermineHowManyTypes from "../Utils/DetermineHowManyTypes";
import { useDispatch } from "react-redux";
import { setAddPokemon } from "../redux/partySlice";

const SearchBar = ({ setPokemonDisplay, setTypes, types, home = true }) => {
  const dispatch = useDispatch();
  const [pokemonForSearchBar, setPokemonForSearchBar] = useState("");

  const apiFunction = async function (pokemon) {
    console.log(await PokeAPIFunction("pokemon", pokemon));
    const pokemonTest = await PokeAPIFunction("pokemon", pokemon);
    if (home) {
      const typesFunctionResult = DetermineHowManyTypes(pokemonTest);
      setPokemonDisplay(pokemonTest);
      setTypes([typesFunctionResult[0], typesFunctionResult[1]]);
    } else {
      dispatch(setAddPokemon(pokemonTest));
    }
  };

  return (
    <div id="searchBar">
      {home && (
        <div id="searchBarHeader">
          <span className={types ? `${types[0]}` : ""}>
            Search through &nbsp;{" "}
          </span>
          <span className={types ? `${types[1]}` : ""}> your PokeDex!</span>
        </div>
      )}
      <div className="searchBarInputFieldAndButton">
        <input
          type="text"
          list="pokemon"
          placeholder="Search through Pokemon name or their ID!"
          className="searchBarInput searchBarDesktop"
          onChange={(e) => setPokemonForSearchBar(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && apiFunction(pokemonForSearchBar)
          }
        />
        <input
          type="text"
          list="pokemon"
          placeholder="Pokemon Name or ID!"
          className="searchBarInput searchBarMobile"
          onChange={(e) => setPokemonForSearchBar(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && apiFunction(pokemonForSearchBar)
          }
        />
        <button
          className="searchBarFindButton"
          onClick={() => apiFunction(pokemonForSearchBar)}
        >
          Find!
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
