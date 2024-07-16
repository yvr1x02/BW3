import React from "react";
import { Card, ListGroup, Image, Col, Button } from "react-bootstrap";
import "../App.css"


const Sidebar = ({ mainProfile, suggestedProfiles }) => {
  return (
    <Col lg={4}>
      <Card className="mb-3 p-3">
        <Card.Body>
          <Card.Title>Lingua del profilo</Card.Title>
          <Card.Text>Italiano</Card.Text>
          <Card.Title>Profilo pubblico e URL</Card.Title>
          <Card.Text>
            <a href={`https://www.linkedin.com/in/${mainProfile.username}`}>
              {`https://www.linkedin.com/in/${mainProfile.username}`}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <Card.Body className="pt=0 mt=0">
          <Card.Title className="mb-3">
            Persone che potresti conoscere
          </Card.Title>
          <ListGroup variant="flush">
            {suggestedProfiles.map((profile) => (
              <ListGroup.Item
                key={profile._id}
                className="d-flex align-items-center "
              >
                <Image
                  src={profile.image}
                  roundedCircle
                  width="50"
                  height="50"
                  className="me-3"
                />
                <div>
                  <div>
                    {profile.name} {profile.surname}
                  </div>
                  <div>{profile.title}</div>
                  <button type="button" className="collegati mt-2 mb-2"><i className="bi bi-person-plus-fill me-2"></i>Collegati</button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Sidebar;
