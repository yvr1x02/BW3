import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileSlice.jsx";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
