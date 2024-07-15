import React from "react";
import { Card, ListGroup, Image, Col } from "react-bootstrap";

const Sidebar = ({ suggestedProfiles }) => {
  return (
    <>
      <Col lg={4}>
      <Card className="mb-3">
      <Card.Body>
        <Card.Title>Lingua del profilo</Card.Title>
        <Card.Text>Italiano</Card.Text>
        <Card.Title>Profilo pubblico e URL</Card.Title>
        <Card.Text>
          <a href={`https://www.linkedin.com/in/${suggestedProfiles.username}`}>
            {`https://www.linkedin.com/in/${suggestedProfiles.username}`}
          </a>
        </Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Card.Title>Persone che potresti conoscere</Card.Title>
          {suggestedProfiles.map((profile) => (
            <ListGroup.Item key={profile._id} className="d-flex align-items-center">
              <Image src={profile.image} roundedCircle width="50" height="50" className="me-3" />
              <div>
                <div>{profile.name} {profile.surname}</div>
                <div>{profile.title}</div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup.Item>
      </ListGroup>
    </Card>
      </Col>
      </>
  );
}

export default Sidebar;