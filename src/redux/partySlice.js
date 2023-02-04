import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  party: [],
  ui: {
    editListMenuShown: false,
    list: [],
    currentInput: "",
    currentMove: 0,
  },
  pokemon: {
    moveset: ["", "", "", ""],
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addPokemonToParty: (state, action) => {
      state.party = [...state.party, action.payload];
    },
    toggleEditListMenuShown: (state) => {
      state.ui.editListMenuShown = !state.ui.editListMenuShown;
    },
    setList: (state, action) => {
      state.ui.list = [...action.payload];
    },
    setCurrentInput: (state, action) => {
      state.ui.currentInput = action.payload;
    },
    setCurrentMove: (state, action) => {
      state.ui.currentMove = action.payload;
    },
    setMoveset: (state, action) => {
      let temp = state.pokemon.moveset;
      temp[action.payload.index] = action.payload.move;
      state.pokemon.moveset = temp;
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
} = counterSlice.actions;

export default counterSlice.reducer;
