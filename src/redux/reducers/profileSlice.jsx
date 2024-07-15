import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk("profile/fetchProfile", async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDM5NjMsImV4cCI6MTcyMjI1MzU2M30.d5z3AHhpToj_0PCm1p4_ahOyejA1lLp3lfQOrDkJm44",
    },
  });
  return response.json();
});

export const fetchSuggestedProfiles = createAsyncThunk("profile/fetchSuggestedProfiles", async () => {
  const userIds = [
    "6694fcc6196d7b0015d6b53f",
    "6551cb68c55e7e0018f83bd2",
    "6551db85c55e7e0018f83bec",
    "6551dca0c55e7e0018f83bed",
    "6551e7bbc55e7e0018f83bfb"
  ];
  const profiles = await Promise.all(userIds.map(async (id) => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDM5NjMsImV4cCI6MTcyMjI1MzU2M30.d5z3AHhpToj_0PCm1p4_ahOyejA1lLp3lfQOrDkJm44",
      },
    });
    return response.json();
  }));
  return profiles;
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: null,
    suggestedProfiles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSuggestedProfiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSuggestedProfiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.suggestedProfiles = action.payload;
      })
      .addCase(fetchSuggestedProfiles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
