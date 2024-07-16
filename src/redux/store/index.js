import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileSlice";
import experienceReducer from "../reducers/experienceSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experiences: experienceReducer, // Aggiungi il reducer delle esperienze qui
  },
});

export default store;