import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BearerToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmNjNjE5NmQ3YjAwMTVkNmI1M2YiLCJpYXQiOjE3MjEwNDAwNzAsImV4cCI6MTcyMjI0OTY3MH0.pANHYRINO1mmo3V6q0jdJxEuVZU217HARDNN-f2nbUw";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (query = "") => {
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`, {
      headers: {
        Authorization: BearerToken,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
