import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { fetchProfile } from "../redux/reducers/profileSlice";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

function Interessi() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const profileStatus = useSelector((state) => state.profile.status);

  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(fetchProfile());
    }
  }, [profileStatus, dispatch]);

  if (profileStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (profileStatus === "failed") {
    return <div>Error loading profile data.</div>;
  }

  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        {profileData && (
          <>
            <Card.Title>
              {profileData.name + " " + profileData.surname}
            </Card.Title>
            <Card.Text>{profileData.title}</Card.Text>
            <Card.Text>{profileData.bio}</Card.Text>
            <Card.Text className="text-secondary">{profileData.area}</Card.Text>
            <div>
              <Button variant="primary" className="rounded-pill ">
                Disponibile per
              </Button>
              <Button variant="outline-primary" className="rounded-pill mx-2 ">
                Aggiungi sezione del profilo
              </Button>
            </div>
          </>
        )}
      </Card>
    </Col>
  );
}

export default Interessi;
