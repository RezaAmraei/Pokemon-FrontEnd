import { configureStore } from "@reduxjs/toolkit";
import party from "./partySlice";

export const store = configureStore({
  reducer: party,
});
