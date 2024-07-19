import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../redux/reducers/postSlice";
import Button from "react-bootstrap/Button";
import PostForm from "./PostForm";
import { fetchProfile } from "../redux/reducers/profileSlice";
import {
  Card,
  Col,
  Container,
  FormControl,
  FormText,
  Row,
} from "react-bootstrap";
import {
  BookmarkFill,
  Calendar2Event,
  ChevronCompactDown,
  PeopleFill,
} from "react-bootstrap-icons";

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
      dispatch(
        uploadProfileImage({ userId: profileData._id, image: profileImage })
      );
    }
  };

  return (
    <div>
      <Container className="container-size mt-2">
        <Row>
          <Col lg={3} className="contenitoreLatSx">
            <Card className="p-0 card-linkedin ">
              {profileData && (
                <>
                  <Card.Img
                    src="src\assets\pipo.jpg"
                    className="bg-image-home"
                  ></Card.Img>
                  <Card.Img
                    variant="top"
                    src={profileData.image}
                    className="profile-image-home "
                    alt="Profile image"
                  />
                  <Card.Body className="pt-2 pb-0">
                    <Card.Title className="pt-4 m-0">
                      {" "}
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
                  <p className="fw-semibold left-side-bar-home  m-0">
                    {" "}
                    Collegamenti
                  </p>
                  <p className="m-0 left-side-bar-home text-secondary">
                    Espandi la tua rete
                  </p>
                </div>
              </Card.Text>
              <Card.Text>
                <div className="d-flex ">
                  <BookmarkFill />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3">
                    {" "}
                    Elementi salvati
                  </p>
                </div>
                <div className="d-flex ">
                  <PeopleFill />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2 mb-3">
                    {" "}
                    Gruppi
                  </p>
                </div>

                <div className="d-flex ">
                  <Calendar2Event />
                  <p className="fw-semibold left-side-bar-home  m-0 ms-2">
                    {" "}
                    Eventi
                  </p>
                </div>
              </Card.Text>
            </Card>
          </Col>
          <Col lg={5} className="contenitoreCentrale">
            <Card className="p-3">
              <PostForm></PostForm>
              <Row>
                <div className="contCreaPost mb-3">
                  <i className="bi bi-person-circle me-2 fs-1 p-0"></i>
                  <button className="btnCreaPost">Crea un post</button>
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
            {postStatus === "loading" && <div>Loading...</div>}
            {postStatus === "failed" && <div>{error}</div>}
            {postStatus === "succeeded" &&
              posts
                .slice()
                .reverse()
                .map((post) => (
                  <Card key={post._id} className="p-0">
                    <Card.Body>
                      <Card.Title>{post.username}</Card.Title>
                      <Card.Text>{post.text}</Card.Text>
                      <Card.Text>
                        Created at: {new Date(post.createdAt).toLocaleString()}{" "}
                      </Card.Text>
                      {post.userId === userId && (
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(post._id)}
                          className=""
                        >
                          Delete
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                ))}
          </Col>
          <Col lg={3}>
            <Card className="mb-3 p-0">
              <Card.Body className="p-0">
                <Card.Title className="ms-3 mt-3">LinkedIn Notizie</Card.Title>
                <Card.Text className="text-secondary ms-3 m-0">
                  Storie principali
                </Card.Text>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    Bis di acqusizioni per EssilorLuxottica
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">
                    21 ore fa
                  </Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    Flessibilità e mobilità green per Generali...
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">
                    2 giorni fa
                  </Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    Alla comunicazione servono processi chiari...
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">
                    1 giorno fa
                  </Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    Due italiane al top nella matematica
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">
                    1 giorno fa
                  </Card.Text>
                </div>
                <div className=" px-3 py-2 story-area">
                  <Card.Text className="fw-semibold m-0 text-story">
                    C'è fermento nel settore degli studentati...
                  </Card.Text>
                  <Card.Text className="text-story-time text-secondary">
                    2 giorni fa
                  </Card.Text>
                </div>
                <Card.Text className="ms-3 fw-semibold m-0  text-story ">
                  <span className="story-area">
                    Vedi altro <ChevronCompactDown />
                  </span>
                </Card.Text>
                <Card.Text className="ms-3 fw-semibold mt-2  text-secondary ">
                  I giochi di oggi{" "}
                  <span className="story-news-area"> NOVITÀ</span>
                </Card.Text>
                <div className=" d-flex">
                  <div className="ms-3 mb-3 ">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_12111_176736)">
                        <path
                          d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z"
                          fill="black"
                          fill-opacity="0.9"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(1 1)"
                          fill="#C9B5E8"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(11.168 1)"
                          fill="#C9B5E8"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(21.332 1)"
                          fill="#FFD4A8"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(1 11.1665)"
                          fill="#ABCBFF"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(11.168 11.1665)"
                          fill="#C2E6B3"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(21.332 11.1665)"
                          fill="#FFD4A8"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(1 21.3335)"
                          fill="#ABCBFF"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(11.168 21.3335)"
                          fill="#E5E5E5"
                        />
                        <rect
                          width="9.66667"
                          height="9.66667"
                          transform="translate(21.332 21.3335)"
                          fill="#E5E5E5"
                        />
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
                    <Card.Text className="ms-2 fw-semibold m-0  text-story">
                      Queens #79
                    </Card.Text>
                    <Card.Text className="ms-2  m-0 text-story-time text-secondary">
                      Incorona ogni regione
                    </Card.Text>
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
            <p className="footer-text text-center mb-2">
              Centro assistenza{" "}
              <span className="ms-3">Privacy e condizioni </span>
            </p>
            <p className="footer-text text-center mb-2">
              Opzioni per gli annunci pubblicitari
            </p>
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
