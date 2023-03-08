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
  };
};
const initialState = {
  party: [],
  // party: localStorageParty || [],
  ui: initalUiState(),
  pokemon: {
    moveset: ["", "", "", ""],
    addPokemon: null,
  },
  currentTeam: 0,
  listOfTeams: [...JSON.parse(localStorage.getItem("teams"))],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addPokemonToParty: (state, action) => {
      state.party = [...state.party, action.payload];
    },
    pickIndexForCurrentTeam: (state, action) => {
      state.currentTeam = action.payload;
    },
    resetParty: (state, action) => {
      state.party = [...action.payload];
    },

    saveButtonPressed: (state, action) => {
      state.ui = initalUiState();
      state.pokemonmoveset = ["", "", "", ""];
      state.pokemonaddPokemon = null;
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

    toggleEditListMenuShown: (state) => {
      state.ui.editListMenuShown = !state.ui.editListMenuShown;
    },

    togglePokemonConfirmed: (state, action) => {
      state.ui.pokemonConfirmed = action.payload;
    },
    toggleSearchBarButton: (state, action) => {
      state.ui.searchButtonShowButton = action.payload;
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
} = counterSlice.actions;

export default counterSlice.reducer;
