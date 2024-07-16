import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/";

export const fetchExperiences = createAsyncThunk(
  "experiences/fetchExperiences",
  async (userId) => {
    const response = await fetch(`${API_URL}${userId}/experiences`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDA1NDksImV4cCI6MTcyMjI1MDE0OX0.vaH3-EZNYJ0ikK0i8Rf1KmmSowfto3Kl9u0H1A5PVPw",
      },
    });
    return response.json();
  }
);

export const addExperience = createAsyncThunk(
  "experiences/addExperience",
  async ({ userId, experience }) => {
    const response = await fetch(`${API_URL}${userId}/experiences`, {
      method: "POST",
      headers: {
        Authorization: "Bearer YOUR_BEARER_TOKEN",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
    });
    return response.json();
  }
);

const experienceSlice = createSlice({
  name: "experiences",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addExperience.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default experienceSlice.reducer;
