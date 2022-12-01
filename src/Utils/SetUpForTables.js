import RandomMoveForPokemon from "./RandomMoveForPokemon";

const SetUpForTables = (pokemon) => {
  const abilities = pokemon.abilities.map((ability) => ability.ability.name);
  return {
    stats: [
      { HP: pokemon.stats[0].base_stat },
      { Attack: pokemon.stats[1].base_stat },
      { Defense: pokemon.stats[2].base_stat },
      { "Special Attack": pokemon.stats[3].base_stat },
      { "Special Defense": pokemon.stats[4].base_stat },
      { Speed: pokemon.stats[5].base_stat },
    ],
    information: [
      {
        "Type(s)":
          pokemon.types.length === 2
            ? [pokemon.types[0].type.name, pokemon.types[1].type.name]
            : [pokemon.types[0].type.name],
      },
      { "Move(s)": RandomMoveForPokemon(pokemon.moves) },
      { "Abilitie(s)": abilities },
    ],
  };
};

export default SetUpForTables;
