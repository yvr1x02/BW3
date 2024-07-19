import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BearerToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZmVhNDE5NmQ3YjAwMTVkNmI1NDAiLCJpYXQiOjE3MjEwNDA1NDksImV4cCI6MTcyMjI1MDE0OX0.vaH3-EZNYJ0ikK0i8Rf1KmmSowfto3Kl9u0H1A5PVPw";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
    headers: {
      Authorization: BearerToken,
    },
  });
  return response.json();
});

export const addPost = createAsyncThunk("posts/addPost", async (formData) => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
    method: "POST",
    headers: {
      Authorization: BearerToken,
    },
    body: formData,
  });
  return response.json();
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({ postId, updatedPost }) => {
  const formData = new FormData();
  formData.append("text", updatedPost.text);
  if (updatedPost.image) {
    formData.append("post", updatedPost.image); // Nome della proprietà dell'immagine nel form-data: "post"
  }

  const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
    method: "PUT",
    headers: {
      Authorization: BearerToken,
    },
    body: formData,
  });
  return response.json();
});

export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
  await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: BearerToken,
    },
  });
  return postId;
});

const postsSlice = createSlice({
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
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);
        state.posts[index] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
