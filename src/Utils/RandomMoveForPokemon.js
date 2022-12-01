const RandomMoveForPokemon = (moves) => {
  const arrayMoveList = [];

  while (arrayMoveList.length < 4) {
    let move = moves[Math.floor(Math.random() * moves.length)].move.name;
    if (!arrayMoveList.includes(move)) {
      arrayMoveList.push(move);
    }
  }

  return arrayMoveList;
};

export default RandomMoveForPokemon;
