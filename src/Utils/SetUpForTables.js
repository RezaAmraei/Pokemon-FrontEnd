const SetUpForTables = (pokemon) => {
  //types = [{name:grass},{name:water}]
  //moves = [{name:scratch},{name:water gun},{name:ember},{name:hydro pump}]
  //abilities = [{name:overgrow},{name:"chlorophyll"}]

  return {
    stats: [
      { HP: pokemon.stats[0].base_stat },
      { Attack: pokemon.stats[1].base_statue },
      { Defense: pokemon.stats[2].base_statue },
      { "Special Attack": pokemon.stats[3].base_state },
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
      { "Move(s)": true },
      { "Abilitie(s)": true },
    ],
  };
};

export default SetUpForTables;

// [{ types: [{ name: grass }, { name: water }] }];
