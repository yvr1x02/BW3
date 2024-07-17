import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/reducers/postSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.profile.data._id);

  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };

  const isOwner = post.userId === currentUserId;

  return (
    <div>
      <h3>{post.text}</h3>
      <p>Created by: {post.username}</p>
      <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
      {isOwner && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
};

export default Post;
