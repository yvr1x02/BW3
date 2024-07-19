import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDA1NDksImV4cCI6MTcyMjI1MDE0OX0.vaH3-EZNYJ0ikK0i8Rf1KmmSowfto3Kl9u0H1A5PVPw"; // Replace with actual token fetching logic

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
    headers: {
      Authorization: `Bearer ${BearerToken}`,
    },
  });
  return response.json();
});

export const createPost = createAsyncThunk("posts/createPost", async (newPost) => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BearerToken}`,
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({ postId, updatedPost }) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BearerToken}`,
    },
    body: JSON.stringify(updatedPost),
  });
  return response.json();
});

export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
  await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${BearerToken}`,
    },
  });
  return postId;
});

export const uploadPostImage = createAsyncThunk("posts/uploadPostImage", async ({ postId, image }) => {
  const formData = new FormData();
  formData.append("post", image);

  const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${BearerToken}`,
    },
    body: formData,
  });

  return response.json();
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      });
  },
});

export default postSlice.reducer;
