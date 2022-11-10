import React, { useState } from "react";
import ColumnOfPokeBalls from "../Components/ColumnOfPokeBalls";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import "../CSS/Main.css";
const Main = () => {
  const [pokemonForSearchBar, setPokemonForSearchBar] = useState("");
  return (
    <div className="mainPage">
      <ColumnOfPokeBalls side="left" />
      <div className="middleColumn">
        <NavBar />
        <SearchBar
          pokemonForSearchBar={pokemonForSearchBar}
          setPokemonForSearchBar={setPokemonForSearchBar}
        />
      </div>
      <ColumnOfPokeBalls side="right" />
    </div>
  );
};

export default Main;
