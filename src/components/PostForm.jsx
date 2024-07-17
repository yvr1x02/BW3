import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/reducers/postSlice";

const PostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addPost({ text }));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Crea un post" />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
