import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { fetchProfile } from "../redux/reducers/profileSlice";
import { Col, ListGroup } from "react-bootstrap";

function Sidebar() {
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
    <>
      <Col lg={4}>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: "18rem" }} className="mt-2">
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: "18rem" }} className="mt-2">
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </>
  );
}

export default Sidebar;
