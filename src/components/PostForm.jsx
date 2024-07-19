import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, uploadPostImage } from "../redux/reducers/postSlice";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = postId ? posts.find((p) => p._id === postId) : null;

  const [text, setText] = useState(post ? post.text : "");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (post) {
      setText(post.text);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postId) {
      await dispatch(updatePost({ postId, updatedPost: { text } }));

      if (image) {
        await dispatch(uploadPostImage({ postId, image }));
      }
    } else {
      const newPost = await dispatch(createPost({ text }));

      if (image) {
        await dispatch(uploadPostImage({ postId: newPost.payload._id, image }));
      }
    }

    navigate("/");
  };

  return (
    <div>
      <h1>{postId ? "Edit Post" : "Create Post"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text:</label>
          <textarea id="text" value={text} onChange={(e) => setText(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">{postId ? "Update" : "Create"} Post</button>
      </form>
    </div>
  );
};

export default PostForm;
