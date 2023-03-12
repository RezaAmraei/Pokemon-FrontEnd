import { createSlice } from "@reduxjs/toolkit";

// let localStorageParty = JSON.parse(localStorage.getItem("teams"));
// if (localStorageParty) {
//   localStorageParty = localStorageParty[0].team;
// }
const initalUiState = () => {
  return {
    editListMenuShown: false,
    list: [],
    currentInput: "",
    currentMove: 0,
    searchButtonShowButton: false,
    pokemonConfirmed: false,
    showConfirmPokemon: true,
  };
};
const initialState = {
  party: [],
  ui: initalUiState(),
  pokemon: {
    moveset: ["", "", "", ""],
    addPokemon: null,
  },
  currentTeam: 0,
  listOfTeams: [...JSON.parse(localStorage.getItem("teams"))],
  addPokemonButton: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addPokemonToParty: (state, action) => {
      state.party = [...state.party, action.payload];
    },
    changeTeamName: (state, action) => {
      const temp = [...state.listOfTeams];
      const teamIndex = action.payload.index;
      temp[teamIndex].teamName = action.payload.newName;
      state.listOfTeams = [...temp];
      localStorage.setItem("teams", JSON.stringify(state.listOfTeams));
    },
    pickIndexForCurrentTeam: (state, action) => {
      state.currentTeam = action.payload;
    },
    resetParty: (state, action) => {
      state.party = [...action.payload];
    },
    resetPokemon: (state) => {
      state.pokemon = { moveset: ["", "", "", ""], addPokemon: null };
    },
    resetReduxUI: (state) => {
      state.addPokemonButton = true;
      state.ui = initalUiState();
      state.pokemon = { moveset: ["", "", "", ""], addPokemon: null };
      state.party = [];
    },
    saveButtonPressed: (state) => {
      state.ui = initalUiState();
      state.pokemon.moveset = ["", "", "", ""];
      state.pokemon.addPokemon = null;
    },
    setAddPokemon: (state, action) => {
      state.pokemon.addPokemon = action.payload;
    },
    setCurrentInput: (state, action) => {
      state.ui.currentInput = action.payload;
    },
    setCurrentMove: (state, action) => {
      state.ui.currentMove = action.payload;
    },
    setList: (state, action) => {
      state.ui.list = [...action.payload];
    },

    setListOfTeamsFromLocalStorage: (state, action) => {
      state.listOfTeams = [...action.payload];
    },
    setMoveset: (state, action) => {
      if (action.payload == "reset") {
        state.pokemon.moveset = ["", "", "", ""];
        return;
      }
      let temp = state.pokemon.moveset;
      temp[action.payload.index] = action.payload.move;
      state.pokemon.moveset = temp;
    },
    toggleAddPokemonButton: (state) => {
      state.addPokemonButton = !state.addPokemonButton;
    },
    toggleEditListMenuShown: (state) => {
      state.ui.editListMenuShown = !state.ui.editListMenuShown;
    },

    togglePokemonConfirmed: (state, action) => {
      state.ui.pokemonConfirmed = action.payload;
    },
    toggleSearchBarButton: (state, action) => {
      state.ui.searchButtonShowButton = action.payload;
    },
    toggleShowConfirmPokemon: (state) => {
      state.ui.showConfirmPokemon = !state.ui.showConfirmPokemon;
    },
  },
});

export const {
  addPokemonToParty,
  toggleEditListMenuShown,
  setList,
  setCurrentInput,
  setCurrentMove,
  setMoveset,
  setAddPokemon,
  toggleSearchBarButton,
  togglePokemonConfirmed,
  resetParty,
  pickIndexForCurrentTeam,
  saveButtonPressed,
  setListOfTeamsFromLocalStorage,
  resetPokemon,
  toggleAddPokemonButton,
  resetReduxUI,
  toggleShowConfirmPokemon,
  changeTeamName,
} = counterSlice.actions;

export default counterSlice.reducer;
