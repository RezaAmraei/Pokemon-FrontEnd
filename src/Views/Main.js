import React, { useState } from "react";
import ColumnOfPokeBalls from "../Components/ColumnOfPokeBalls";
import DataOfPokemon from "../Components/DataOfPokemon";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import "../CSS/Main.css";
const Main = () => {
  const [pokemonForSearchBar, setPokemonForSearchBar] = useState("");
  const [pokemonDisplay, setPokemonDisplay] = useState(null);
  const [types, setTypes] = useState(null);
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar types={types} />
        <SearchBar
          pokemonForSearchBar={pokemonForSearchBar}
          setPokemonForSearchBar={setPokemonForSearchBar}
          setPokemonDisplay={setPokemonDisplay}
          setTypes={setTypes}
          types={types}
        />

        {pokemonDisplay && (
          <DataOfPokemon pokemonDisplay={pokemonDisplay} types={types} />
        )}
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Main;
