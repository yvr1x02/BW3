import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost, updatePost } from "../redux/reducers/postSlice";
import { fetchProfile, uploadProfileImage } from "../redux/reducers/profileSlice"; // Corretto import
import Button from "react-bootstrap/Button";
import PostForm from "./PostForm";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { BookmarkFill, Calendar2Event, ChevronCompactDown, PeopleFill } from "react-bootstrap-icons";

const Posts = ({ userId }) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const [showModal, setShowModal] = useState(false);
  const [showUserPosts, setShowUserPosts] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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

  const handleUpload = () => {
    if (profileImage && profileData._id) {
      dispatch(uploadProfileImage({ userId: profileData._id, image: profileImage }));
    }
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

  const filteredPosts = showUserPosts ? posts.filter((post) => post.username === profileData.username) : posts;

  return (
    <div>
      <Container className="container-size mt-2">
        <Row>
          <Col lg={3}>
            <Card className="p-0 card-linkedin">
              {profileData && (
                <>
                  <Card.Img src="src/assets/pipo.jpg" className="bg-image-home"></Card.Img>
                  <Card.Img variant="top" src={profileData.image} className="profile-image-home" alt="Profile image" />
                  <Card.Body className="pt-2 pb-0">
                    <Card.Title className="pt-4 m-0">{profileData.name + " " + profileData.surname}</Card.Title>
                    <Card.Text className="m-0 left-side-bar-home">{profileData.title}</Card.Text>
                    <Card.Text className="left-side-bar-home m-0">{profileData.bio}</Card.Text>
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
                  <p className="fw-semibold left-side-bar-home  m-0">Collegamenti</p>
                  <p className="m-0 left-side-bar-home text-secondary">Espandi la tua rete</p>
                </div>
              </Card.Text>
              <Card.Text>
                <div className="d-flex ">
                  <BookmarkFill />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3">Elementi salvati</p>
                </div>
                <div className="d-flex ">
                  <PeopleFill />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3">Gruppi</p>
                </div>
                <div className="d-flex ">
                  <Calendar2Event />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2">Eventi</p>
                </div>
              </Card.Text>
            </Card>
          </Col>
          <Col lg={5} className="contenitoreCentrale">
            <Card className="p-3 card1">
              <PostForm />
              <Row>
                <div className="contCreaPost mb-3">
                  {profileData && (
                    <>
                      <Image src={profileData.image} className="imgUtente"></Image>
                    </>
                  )}
                  <Button className="btnCreaPost" onClick={handleShow}>
                    Create Post
                  </Button>
                  <PostForm show={showModal} handleClose={handleClose} />
                </div>
                <Col lg={5}>
                  <Button className="btnMultimed d-flex align-items-center">
                    <span className="pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="image-medium"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="svgContenutiMult"
                      >
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                      </svg>
                    </span>
                    <p className="mt-2">Contenuti multimediali</p>
                  </Button>
                </Col>
                <Col lg={3}>
                  <Button className="btnEvento">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="calendar-medium"
                      aria-hidden="true"
                      role="none"
                      data-supported-dps="24x24"
                      fill="#c37d16"
                      className="svgContenutiMult"
                    >
                      <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
                    </svg>
                    Evento
                  </Button>
                </Col>
                <Col lg={4}>
                  <Button className="btnArticolo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="content-align-left-medium"
                      aria-hidden="true"
                      role="none"
                      data-supported-dps="24x24"
                      fill="#e06847"
                      className="svgContenutiMult"
                    >
                      <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                    </svg>
                    Scrivi un articolo
                  </Button>
                </Col>
              </Row>
            </Card>
            <Button variant="primary" className="my-3" onClick={handleShowUserPosts}>
              {showUserPosts ? "Mostra tutti i post" : "Mostra solo i miei post"}
            </Button>
            {postStatus === "loading" && <div>Loading...</div>}
            {postStatus === "failed" && <div>{error}</div>}
            {postStatus === "succeeded" &&
              filteredPosts
                .slice()
                .reverse()
                .map((post) => (
                  <Card key={post._id} className="p-0 mt-3">
                    <Card.Body className="p-2">
                      <div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex ">
                            <div>
                              <Image src={post.user.image} className="imgUtente"></Image>
                            </div>
                            <div className="ms-3">
                              <div>
                                <Card.Title>{post.username}</Card.Title>
                              </div>
                              <div>
                                <Card.Text>
                                  <p className="p-0 m-0 pInfoPost" >Junior Full-Stack Developer</p>
                                  <span className="spanDataPost">
                                  {new Date(post.createdAt).toLocaleString()}{" "}
                                  </span>
                                  {post.image && <Card.Img variant="top" src={post.image} alt="Post image" />}
                                </Card.Text>
                              </div>
                            </div>
                          </div>
                          {post.userId === userId && (
                            <Button variant="danger" onClick={() => handleDelete(post._id)} className="btnDelete">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="red"
                                className="bi bi-trash3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </Button>
                          )}
                        </div>
                        <div>
                          <Card.Text>{post.text}</Card.Text>
                        </div>
                        <hr />

                        <div className="ContainerPost">
                          <Button className="btnPost">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              id="thumbs-up-outline-medium"
                              aria-hidden="true"
                              role="none"
                              data-supported-dps="24x24"
                              fill="black"
                              className="svgConsiglia"
                            >
                              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                            </svg>
                            Consiglia
                          </Button>
                          <Button className="btnPost">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              id="comment-medium"
                              aria-hidden="true"
                              role="none"
                              data-supported-dps="24x24"
                              fill="black"
                              className="svgCommenta"
                            >
                              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                            </svg>
                            Commenta
                          </Button>
                          <Button className="btnPost">
                            <div className="contDiffondiPost">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                id="repost-medium"
                                aria-hidden="true"
                                role="none"
                                data-supported-dps="24x24"
                                fill="black"
                                className="svgDiffondi"
                              >
                                <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
                              </svg>
                              <span className="spanDiffondiPost">Diffondi il post</span>
                            </div>
                          </Button>
                          <Button className="btnPost">
                            <div className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="rtl-flip"
                                id="send-privately-medium"
                                aria-hidden="true"
                                role="none"
                                data-supported-dps="24x24"
                                fill="black"
                                className="svgInvia"
                              >
                                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                              </svg>
                              <span>Invia</span>
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="contCreaCommento mt-3 mb-5 p-0">
                        <Image src={profileData.image} className="imgUtente"></Image>
                        <button className="btnCreaPost">
                          Crea commento
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              id="emoji-medium"
                              aria-hidden="true"
                              role="none"
                              data-supported-dps="24x24"
                              fill="black"
                              height="25px"
                              width="25px"
                            >
                              <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              id="image-medium"
                              aria-hidden="true"
                              role="none"
                              data-supported-dps="24x24"
                              fill="currentColor"
                              height="25px"
                              width="25px"
                            >
                              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                      <hr className="mt-3" />
                    </Card.Body>
                  </Card>
                ))}
          </Col>
          <Col lg={3}>
            <Card className="mb-3 p-0">
              <Card.Body className="p-0">
                <Card.Title className="ms-3 mt-3">LinkedIn Notizie</Card.Title>
                <Card.Text className="text-secondary ms-3 m-0">Storie principali</Card.Text>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">Bis di acqusizioni per EssilorLuxottica</Card.Text>
                  <Card.Text className="text-story-time text-secondary">21 ore fa</Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    Flessibilità e mobilità green per Generali...
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">2 giorni fa</Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    Alla comunicazione servono processi chiari...
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">1 giorno fa</Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">Due italiane al top nella matematica</Card.Text>
                  <Card.Text className="text-story-time text-secondary">1 giorno fa</Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    C'è fermento nel settore degli studentati...
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">2 giorni fa</Card.Text>
                </div>
                <Card.Text className="ms-3 fw-semibold m-0  text-story ">
                  <span className="story-area">
                    Vedi altro <ChevronCompactDown />
                  </span>
                </Card.Text>
                <Card.Text className="ms-3 fw-semibold mt-2  text-secondary ">
                  I giochi di oggi <span className="story-news-area"> NOVITÀ</span>
                </Card.Text>
                <div className=" d-flex">
                  <div className="ms-3 mb-3 ">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_12111_176736)">
                        <path
                          d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z"
                          fill="black"
                          fill-opacity="0.9"
                        />
                        <rect width="9.66667" height="9.66667" transform="translate(1 1)" fill="#C9B5E8" />
                        <rect width="9.66667" height="9.66667" transform="translate(11.168 1)" fill="#C9B5E8" />
                        <rect width="9.66667" height="9.66667" transform="translate(21.332 1)" fill="#FFD4A8" />
                        <rect width="9.66667" height="9.66667" transform="translate(1 11.1665)" fill="#ABCBFF" />
                        <rect width="9.66667" height="9.66667" transform="translate(11.168 11.1665)" fill="#C2E6B3" />
                        <rect width="9.66667" height="9.66667" transform="translate(21.332 11.1665)" fill="#FFD4A8" />
                        <rect width="9.66667" height="9.66667" transform="translate(1 21.3335)" fill="#ABCBFF" />
                        <rect width="9.66667" height="9.66667" transform="translate(11.168 21.3335)" fill="#E5E5E5" />
                        <rect width="9.66667" height="9.66667" transform="translate(21.332 21.3335)" fill="#E5E5E5" />
                      </g>
                      <path
                        d="M1.23223 1.23223C0.830955 1.63351 0.65836 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.65836 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.65836 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223Z"
                        stroke="black"
                        stroke-opacity="0.9"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <clipPath id="clip0_12111_176736">
                          <path
                            d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <Card.Text className="ms-2 fw-semibold m-0  text-story">Queens #79</Card.Text>
                    <Card.Text className="ms-2  m-0 text-story-time text-secondary">Incorona ogni regione</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="mb-3 p-0">
              <Card.Img src="src\assets\ads.png"></Card.Img>
            </Card>
            <p className="footer-text text-center mb-2">
              Informazioni <span className="ms-3">Accessibilità </span>
            </p>
            <p class="footer-text text-center mb-2">
              Centro assistenza <span className="ms-3">Privacy e condizioni </span>
            </p>
            <p className="footer-text text-center mb-2">Opzioni per gli annunci pubblicitari</p>
            <p className="footer-text text-center mb-2">
              Pubblicità <span className="ms-3">Servizi alle aziende</span>
            </p>
            <p className="footer-text text-center mb-2">
              Scarica l’app LinkedIn<span className="ms-3"> Altro</span>
            </p>

            <p className="footer-text ms-4  d-flex fw-semibold ">
              <svg className="logo-text-likedin">
                <image
                  href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                  x="0"
                  y="0"
                  width="56"
                  height="14"
                ></image>
              </svg>
              LinkedIn Corporation © 2024
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
