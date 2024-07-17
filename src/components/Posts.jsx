import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/reducers/postsSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const getSortedPosts = (posts) => {
    return posts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  const sortedPosts = getSortedPosts(posts);

  return (
    <div>
      {postStatus === "loading" && <div>Loading...</div>}
      {postStatus === "failed" && <div>{error}</div>}
      {postStatus === "succeeded" && sortedPosts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Posts;
