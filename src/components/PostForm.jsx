import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/reducers/postSlice";

const PostForm = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && profileData) {
      const formData = new FormData();
      formData.append("text", text);
      formData.append("username", profileData.username);
      if (image) {
        formData.append("post", image); // Nome della proprietà dell'immagine nel form-data: "post"
      }

      // Debug: log FormData contents
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      dispatch(addPost(formData))
        .unwrap()
        .then((response) => {
          console.log("Post added:", response);
        })
        .catch((error) => {
          console.error("Failed to add post:", error);
        });

      setText("");
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Crea un post"
        className="border-pill"
        required
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
