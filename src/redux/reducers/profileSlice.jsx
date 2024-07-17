import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk("profile/fetchProfile", async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDA1NDksImV4cCI6MTcyMjI1MDE0OX0.vaH3-EZNYJ0ikK0i8Rf1KmmSowfto3Kl9u0H1A5PVPw",
    },
  });
  return response.json();
});

export const fetchSuggestedProfiles = createAsyncThunk("profile/fetchSuggestedProfiles", async () => {
  const userIds = [
    "6694fcc6196d7b0015d6b53f", //yuri
    "6551cb68c55e7e0018f83bd2",
    "6551db85c55e7e0018f83bec",
    "6551dca0c55e7e0018f83bed",
    "6551e7bbc55e7e0018f83bfb",
    //6694fea4196d7b0015d6b540 //alex
  ];
  const profiles = await Promise.all(
    userIds.map(async (id) => {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDA1NDksImV4cCI6MTcyMjI1MDE0OX0.vaH3-EZNYJ0ikK0i8Rf1KmmSowfto3Kl9u0H1A5PVPw",
        },
      });
      return response.json();
    })
  );
  return profiles;
});

export const uploadProfileImage = createAsyncThunk("profile/uploadProfileImage", async ({ userId, image }) => {
  const formData = new FormData();
  formData.append("profile", image);

  const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
    method: "POST",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDA1NDksImV4cCI6MTcyMjI1MDE0OX0.vaH3-EZNYJ0ikK0i8Rf1KmmSowfto3Kl9u0H1A5PVPw",
    },
    body: formData,
  });

  return response.json();
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
      })
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        state.data.image = action.payload.image;
      });
  },
});

export default profileSlice.reducer;
