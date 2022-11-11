const DetermineHowManyTypes = (pokemon) => {
  console.log(pokemon);
  if (pokemon.types.length === 2) {
    return [`${pokemon.types[0].type.name}`, `${pokemon.types[1].type.name}`];
  } else {
    return [`${pokemon.types[0].type.name}`, `${pokemon.types[0].type.name}`];
  }
};

export default DetermineHowManyTypes;
