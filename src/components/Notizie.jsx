import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  deletePost,
  updatePost,
} from "../redux/reducers/postSlice";
import Button from "react-bootstrap/Button";
import PostForm from "./PostForm";
import { fetchProfile } from "../redux/reducers/profileSlice";
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import {
  BookmarkFill,
  Calendar2Event,
  PeopleFill,
} from "react-bootstrap-icons";

const Posts = ({ userId }) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const [showUserPosts, setShowUserPosts] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
      dispatch(fetchProfile());
    }
  }, [postStatus, dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleEdit = (post) => {
    setEditingPostId(post._id);
    setEditText(post.text);
    setEditImage(null);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("text", editText);
    if (editImage) {
      formData.append("post", editImage); // Nome della proprietà dell'immagine nel form-data: "post"
    }

    dispatch(updatePost({ postId: editingPostId, updatedPost: formData }));
    setEditingPostId(null);
    setEditText("");
    setEditImage(null);
  };

  const handleShowUserPosts = () => {
    setShowUserPosts(!showUserPosts);
  };

  const handleEditImageChange = (e) => {
    setEditImage(e.target.files[0]);
  };

  const filteredPosts = showUserPosts
    ? posts.filter((post) => post.username === profileData.username)
    : posts;

  return (
    <div>
      <Container className="container-size mt-2">
        <Row>
          <Col lg={3}>
            <Card className="p-0 card-linkedin">
              {profileData && (
                <>
                  <Card.Img
                    src="src/assets/pipo.jpg"
                    className="bg-image-home"
                  ></Card.Img>
                  <Card.Img
                    variant="top"
                    src={profileData.image}
                    className="profile-image-home"
                    alt="Profile image"
                  />
                  <Card.Body className="pt-2 pb-0">
                    <Card.Title className="pt-4 m-0">
                      {profileData.name + " " + profileData.surname}
                    </Card.Title>
                    <Card.Text className="m-0 left-side-bar-home">
                      {profileData.title}
                    </Card.Text>
                    <Card.Text className="left-side-bar-home m-0">
                      {profileData.bio}
                    </Card.Text>
                    <Card.Text className="text-secondary d-flex m-0 left-side-bar-home-area">
                      {profileData.area}
                    </Card.Text>
                  </Card.Body>
                </>
              )}
            </Card>
            <Card className="mt-2 p-3">
              <Card.Text className="text-secondary left-side-bar-home-area">
                Accedi a strumenti e informazioni in esclusiva
                <span className=" fw-bold pAccount m-0">
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/emoji/48/yellow-square-emoji.png"
                    alt="yellow-square-emoji"
                  />
                  Prova Premium per 0 EUR
                </span>
              </Card.Text>
            </Card>
            <Card className="mt-2 p-3">
              <Card.Text className="d-flex border-bottom pb-2">
                <div>
                  <span className="fw-semibold left-side-bar-home  m-0">
                    {" "}
                    Collegamenti
                  </span>
                  <span className="m-0 left-side-bar-home text-secondary">
                    Espandi la tua rete
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                <div className="d-flex ">
                  <BookmarkFill />
                  <span className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3">
                    {" "}
                    Elementi salvati
                  </span>
                </div>
                <div className="d-flex ">
                  <PeopleFill />
                  <span className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3">
                    {" "}
                    Gruppi
                  </span>
                </div>

                <div className="d-flex ">
                  <Calendar2Event />
                  <span className="fw-semibold left-side-bar-home  m-0 ms-2">
                    {" "}
                    Eventi
                  </span>
                </div>
              </Card.Text>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <PostForm />
            </Card>
            <Button
              variant="primary"
              className="my-3"
              onClick={handleShowUserPosts}
            >
              {showUserPosts
                ? "Mostra tutti i post"
                : "Mostra solo i miei post"}
            </Button>
            {postStatus === "loading" && <div>Loading...</div>}
            {postStatus === "failed" && <div>{error}</div>}
            {postStatus === "succeeded" &&
              filteredPosts
                .slice()
                .reverse()
                .map((post) => (
                  <Card key={post._id} className="my-3">
                    <Card.Body>
                      {editingPostId === post._id ? (
                        <>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                          />
                          <input type="file" onChange={handleEditImageChange} />
                          <Button
                            variant="success"
                            onClick={handleUpdate}
                            className="me-2 mt-2"
                          >
                            Update
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() => setEditingPostId(null)}
                            className="mt-2"
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Card.Title>{post.username}</Card.Title>
                          <Card.Text>{post.text}</Card.Text>
                          {post.image && (
                            <Card.Img
                              variant="top"
                              src={post.image}
                              alt="Post image"
                            />
                          )}
                          <Card.Text>
                            Created at:{" "}
                            {new Date(post.createdAt).toLocaleString()}
                          </Card.Text>
                          {post.userId === userId && (
                            <>
                              <Button
                                variant="danger"
                                onClick={() => handleDelete(post._id)}
                                className="me-2"
                              >
                                Delete
                              </Button>
                              <Button
                                variant="primary"
                                onClick={() => handleEdit(post)}
                              >
                                Edit
                              </Button>
                            </>
                          )}
                        </>
                      )}
                    </Card.Body>
                  </Card>
                ))}
          </Col>
          <Col lg={3}>
            <Card className="mb-3 p-1">
              <Card.Body>
                <Card.Title>Lingua del profilo</Card.Title>
                <Card.Text>Italiano</Card.Text>
                <Card.Title>Profilo pubblico e URL</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
