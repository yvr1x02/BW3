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

//import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
//const BearerToken =
//  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmNjNjE5NmQ3YjAwMTVkNmI1M2YiLCJpYXQiOjE3MjEwNDAwNzAsImV4cCI6MTcyMjI0OTY3MH0.pANHYRINO1mmo3V6q0jdJxEuVZU217HARDNN-f2nbUw";
//
//export const fetchExperiences = createAsyncThunk("experiences/fetchExperiences", async (userId) => {
//  const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`);
//  return response.json();
//});
//
//export const addExperience = createAsyncThunk("experiences/addExperience", async ({ userId, experience }) => {
//  const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
//    method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//      Authorization: BearerToken,
//    },
//    body: JSON.stringify(experience),
//  });
//  return response.json();
//});
//
//export const updateExperience = createAsyncThunk("experiences/updateExperience", async ({ userId, expId, experience }) => {
//  const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
//    method: "PUT",
//    headers: {
//      "Content-Type": "application/json",
//      Authorization: BearerToken,
//    },
//    body: JSON.stringify(experience),
//  });
//  return response.json();
//});
//export const deleteExperience = createAsyncThunk("experiences/deleteExperience", async ({ userId, expId }) => {
//  await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
//    method: "DELETE",
//    headers: {
//      Authorization: BearerToken,
//    },
//  });
//  return expId;
//});
//
//const experiencesSlice = createSlice({
//  name: "experiences",
//  initialState: {
//    experiences: [],
//    status: "idle",
//    error: null,
//  },
//  reducers: {},
//  extraReducers: (builder) => {
//    builder
//      .addCase(fetchExperiences.pending, (state) => {
//        state.status = "loading";
//      })
//      .addCase(fetchExperiences.fulfilled, (state, action) => {
//        state.status = "succeeded";
//        state.experiences = action.payload;
//      })
//      .addCase(fetchExperiences.rejected, (state, action) => {
//        state.status = "failed";
//        state.error = action.error.message;
//      })
//
//      .addCase(addExperience.fulfilled, (state, action) => {
//        state.experiences.push(action.payload);
//      })
//      .addCase(updateExperience.fulfilled, (state, action) => {
//        const index = state.experiences.findIndex((exp) => exp._id === action.payload._id);
//        state.experiences[index] = action.payload;
//      })
//      .addCase(deleteExperience.fulfilled, (state, action) => {
//        state.experiences = state.experiences.filter((exp) => exp._id !== action.payload);
//      });
//  },
//});
//export default experiencesSlice.reducer;
//