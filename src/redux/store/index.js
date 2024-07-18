import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileSlice";
import experiencesReducer from "../reducers/experienceSlice";
import postsReducer from "../reducers/postSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experiences: experiencesReducer,
    posts: postsReducer,
  },
});

export default store;
