export const selectParty = (state) => state.party;
export const selectEditListMenuShown = (state) => state.ui.editListMenuShown;
export const selectList = (state) => state.ui.list;
export const selectCurrentInput = (state) => state.ui.currentInput;
export const selectCurrentMove = (state) => state.ui.currentMove;
export const selectMoveset = (state) => state.pokemon.moveset;
export const selectAddPokemon = (state) => state.pokemon.addPokemon;
export const selectSearchButtonShowButton = (state) =>
  state.ui.searchButtonShowButton;
export const selectPokemonConfirmed = (state) => state.ui.pokemonConfirmed;
export const selectCurrentTeam = (state) => state.currentTeam;
export const selectListOfTeams = (state) => state.listOfTeams;
export const selectAddPokemonButton = (state) => state.addPokemonButton;
export const selectShowConfirmPokemon = (state) => state.ui.showConfirmPokemon;
