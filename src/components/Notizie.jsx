import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../redux/reducers/postSlice";
import Button from "react-bootstrap/Button";
import PostForm from "./PostForm";
import { fetchProfile } from "../redux/reducers/profileSlice";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BookmarkFill, Calendar2Event, PeopleFill } from "react-bootstrap-icons";

const Posts = ({ userId }) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleUpload = () => {
    if (profileImage && profileData._id) {
      dispatch(uploadProfileImage({ userId: profileData._id, image: profileImage }));
    }
  };

  return (
    <div>
      <Container className="container-size mt-2">
        <Row>
          <Col lg={3}>
            <Card className="p-0 card-linkedin ">
              {profileData && (
                <>
                  <Card.Img src="src\assets\pipo.jpg" className="bg-image-home"></Card.Img>
                  <Card.Img variant="top" src={profileData.image} className="profile-image-home " alt="Profile image" />
                  <Card.Body className="pt-2 pb-0">
                    <Card.Title className="pt-4 m-0"> {profileData.name + " " + profileData.surname}</Card.Title>
                    <Card.Text className="m-0 left-side-bar-home">{profileData.title}</Card.Text>
                    <Card.Text className="left-side-bar-home m-0">{profileData.bio}</Card.Text>
                    <Card.Text className="text-secondary d-flex m-0 left-side-bar-home-area">
                      {profileData.area}
                    </Card.Text>
                  </Card.Body>
                </>
              )}
              ;
            </Card>
            <Card className="mt-2 p-3">
              <Card.Text className="text-secondary left-side-bar-home-area">
                Accedi a strumenti e informazioni in esclusiva
                <p className=" fw-bold pAccount m-0">
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/emoji/48/yellow-square-emoji.png"
                    alt="yellow-square-emoji"
                  />
                  Prova Premium per 0 EUR
                </p>
              </Card.Text>
            </Card>
            <Card className="mt-2 p-3">
              <Card.Text className="d-flex border-bottom pb-2">
                <div>
                  <p className="fw-semibold left-side-bar-home  m-0"> Collegamenti</p>
                  <p className="m-0 left-side-bar-home text-secondary">Espandi la tua rete</p>
                </div>
              </Card.Text>
              <Card.Text>
                <div className="d-flex ">
                  <BookmarkFill />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3"> Elementi salvati</p>
                </div>
                <div className="d-flex ">
                  <PeopleFill />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3"> Gruppi</p>
                </div>

                <div className="d-flex ">
                  <Calendar2Event />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2"> Eventi</p>
                </div>
              </Card.Text>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <PostForm></PostForm>
            </Card>
            {postStatus === "loading" && <div>Loading...</div>}
            {postStatus === "failed" && <div>{error}</div>}
            {postStatus === "succeeded" &&
              posts
                .slice()
                .reverse()
                .map((post) => (
                  <Card key={post._id}>
                    <Card.Body>
                      <Card.Title>{post.username}</Card.Title>
                      <Card.Text>{post.text}</Card.Text>
                      <Card.Text>Created at: {new Date(post.createdAt).toLocaleString()} </Card.Text>
                      {post.userId === userId && (
                        <Button variant="danger" onClick={() => handleDelete(post._id)}>
                          Delete
                        </Button>
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
