import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { fetchProfile, fetchSuggestedProfiles, uploadProfileImage } from "../redux/reducers/profileSlice";
import Button from "react-bootstrap/Button";
import ProfileAlert from "./ProfileAlert";
import { Col, Container, Row, Form } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Consigliati from "./Consigliati";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Attività from "./Attività";
import Interessi from "./Interessi";
import ExperienceList from "./ExperienceList";
import { BsCamera } from "react-icons/bs";
import { ArrowBarUp, CameraFill } from "react-bootstrap-icons";

function Profile() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const suggestedProfiles = useSelector((state) => state.profile.suggestedProfiles);
  const profileStatus = useSelector((state) => state.profile.status);
  const error = useSelector((state) => state.profile.error);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(fetchProfile());
      dispatch(fetchSuggestedProfiles());
    }
  }, [profileStatus, dispatch]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleUpload = () => {
    if (profileImage && profileData._id) {
      dispatch(uploadProfileImage({ userId: profileData._id, image: profileImage }));
    }
  };

  if (profileStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (profileStatus === "failed") {
    return <div>Error loading profile data.</div>;
  }

  return (
    <Container className="mt-2 container-size">
      <Row>
        <Col lg={8}>
          <Card className="p-0 card-linkedin">
            {profileData && (
              <>
                <Card.Img src="src\assets\pipo.jpg" className="bg-image"></Card.Img>
                <Card.Img variant="top" src={profileData.image} className="profile-image " alt="Profile image" />
                <Card.Body className="pt-2">
                  <Form.Group className="file-input ">
                    <label htmlFor="profileImageInput" className="custom-file-upload pe-2">
                      <CameraFill className="fs-3" />
                    </label>
                    <Form.Control
                      id="profileImageInput"
                      type="file"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={handleUpload}
                      className="file-input-Upload rounded-pill"
                    >
                      <ArrowBarUp className="fs-3" />
                    </Button>
                  </Form.Group>
                  <Card.Title>{profileData.name + " " + profileData.surname}</Card.Title>

                  <Card.Text className="m-0">{profileData.title}</Card.Text>
                  <Card.Text>{profileData.bio}</Card.Text>
                  <Card.Text className="text-secondary d-flex m-0">
                    {profileData.area}
                    <p>-</p>
                    <p className="text-primary info-contatto">informazioni di contatto</p>
                  </Card.Text>
                  <div>
                    <Button variant="primary" className="rounded-pill">
                      Disponibile per
                    </Button>
                    <Button variant="outline-primary" className="rounded-pill mx-2 ">
                      Aggiungi sezione del profilo
                    </Button>
                    <Button variant="outline-primary" className="rounded-pill mx-2 ">
                      Migliora profilo
                    </Button>
                    <Button variant="outline-secondary" className="rounded-pill mx-2 ">
                      Altro
                    </Button>
                  </div>
                  <div className="mt-5" style={{ width: "100%" }}>
                    <ProfileAlert />
                  </div>
                </Card.Body>
              </>
            )}
          </Card>
          <Consigliati />
          <Analisi />
          <Risorse />
          <Attività />
          <Col>{profileData && <ExperienceList userId={profileData._id} />}</Col>
          <Interessi />
        </Col>
        <Col lg={4}>{profileData && <Sidebar mainProfile={profileData} suggestedProfiles={suggestedProfiles} />}</Col>
      </Row>
    </Container>
  );
}

export default Profile;
