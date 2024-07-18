import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/reducers/postSlice";

const PostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addPost({ text, username: profileData.username }));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Crea un post"
        className="border-pill"
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
