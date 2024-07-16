import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { fetchProfile, fetchSuggestedProfiles } from "../redux/reducers/profileSlice";
import Button from "react-bootstrap/Button";
import ProfileAlert from "./ProfileAlert";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Consigliati from "./Consigliati";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Attività from "./Attività";
import Esperienza from "./Esperienza";
import Interessi from "./Interessi";
import ExperienceList from "./ExperienceList";

function Profile() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const suggestedProfiles = useSelector((state) => state.profile.suggestedProfiles);
  const profileStatus = useSelector((state) => state.profile.status);
  const error = useSelector((state) => state.profile.error);

  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(fetchProfile());
      dispatch(fetchSuggestedProfiles());
    }
  }, [profileStatus, dispatch]);

  if (profileStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (profileStatus === "failed") {
    return <div>Error loading profile data.</div>;
  }

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Card className="p-0 card-linkedin">
            {profileData && (
              <>
                <Card.Img
                  src="src\assets\pipo.jpg"
                  className="bg-image"
                ></Card.Img>
                <Card.Img
                  variant="top"
                  src={profileData.image}
                  className="profile-image "
                  alt="Profile image"
                />
                <Card.Body className="pt-5">
                  <Card.Title>
                    {profileData.name + " " + profileData.surname}
                  </Card.Title>
                  <Card.Text>{profileData.title}</Card.Text>
                  <Card.Text>{profileData.bio}</Card.Text>
                  <Card.Text className="text-secondary">
                    {profileData.area}
                  </Card.Text>
                  <div>
                    <Button variant="primary" className="rounded-pill ">
                      Disponibile per
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill mx-2 "
                    >
                      Aggiungi sezione del profilo
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill mx-2 "
                    >
                      Migliora profilo
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="rounded-pill mx-2 "
                    >
                      Altro
                    </Button>
                  </div>
                  <div className="mt-5" style={{ width: "30%" }}>
                    <ProfileAlert />
                  </div>
                  {profileData &&<ExperienceList userId={profileData._id} />}
                </Card.Body>
              </>
            )}
          </Card>
        </Col>
        {profileData &&<Sidebar mainProfile={profileData} suggestedProfiles={suggestedProfiles}/>}
        <Consigliati />
        <Analisi />
        <Risorse />
        <Attività />
        <Esperienza />
        <Interessi />
      </Row>
    </Container>
  );
}

export default Profile;
