import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/reducers/postSlice";
import { Button,} from "react-bootstrap";

const PostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);

  const handleUpload = () => {
    if (profileImage && profileData._id) {
      dispatch(uploadProfileImage({ userId: profileData._id, image: profileImage }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addPost({ text }));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      {profileData && (
        <div className="d-flex contenitoreSearchBar mb-3">
          <img variant="top" src={profileData.image} className="profile-image-post" alt="Profile image" />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Crea un post"
            className="textArea"
          />
          <Button type="submit" className="btn-post">
            Post
          </Button>
        </div>
        
      )}
    </form>
  );
};

export default PostForm;
