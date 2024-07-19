import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, uploadPostImage } from "../redux/reducers/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Button, Form, Container } from "react-bootstrap";

const PostForm = ({ show, handleClose }) => {
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

    handleClose(); // Close the modal
    navigate("/");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{postId ? "Edit Post" : "Create Post"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formText">
              <Form.Label>Text:</Form.Label>
              <Form.Control as="textarea" rows={3} value={text} onChange={(e) => setText(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Image:</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {postId ? "Update" : "Create"} Post
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PostForm;
