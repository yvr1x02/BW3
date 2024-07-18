import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileSlice";
import experiencesReducer from "../reducers/experienceSlice";
import postsReducer from "../reducers/postSlice";
import jobsReducer from "../reducers/jobsSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experiences: experiencesReducer,
    posts: postsReducer,
    jobs: jobsReducer,
  },
});

export default store;
