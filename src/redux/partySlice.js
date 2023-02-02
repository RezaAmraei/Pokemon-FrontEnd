import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  party: [],
  ui: {
    editListMenuShown: false,
    list: [],
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
  },
});

export const { addPokemonToParty, toggleEditListMenuShown, setList } =
  counterSlice.actions;

export default counterSlice.reducer;
