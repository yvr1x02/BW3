// commentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments";
const bearer =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlhMTJlMjhmMDYyYTAwMTVlZTc1YmUiLCJpYXQiOjE3MjEzNzM0MTAsImV4cCI6MTcyMjU4MzAxMH0.lnGAucKNrerKguJzBD9RVhymgyt_fJoKqF8C45fzBt4";

export const fetchComments = createAsyncThunk("comments/fetchComments", async (postId) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    headers: {
      Authorization: bearer,
    },
  });
  const data = await response.json();
  return data;
});

export const postComment = createAsyncThunk("comments/postComment", async ({ comment, rate, postId }) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: bearer,
    },
    body: JSON.stringify({ comment, rate, elementId: postId }),
  });
  const data = await response.json();
  return data;
});

export const deleteComment = createAsyncThunk("comments/deleteComment", async (commentId) => {
  await fetch(`${API_URL}/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: bearer,
    },
  });
  return commentId;
});

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter((comment) => comment._id !== action.payload);
      });
  },
});

export default commentSlice.reducer;
