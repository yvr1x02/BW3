import React from "react";
import { Card, ListGroup, Image, Col, Button } from "react-bootstrap";
import "../App.css";

const Sidebar = ({ mainProfile, suggestedProfiles }) => {
  return (
    <>
      <Card className="mb-3 p-1">
        <Card.Body>
          <div className="border-bottom mb-2">
            <Card.Title className="text-sidebar-profile mb-1">Lingua del profilo</Card.Title>
            <Card.Text className="text-sidebar-profile-small mb-2 text-secondary">Italiano</Card.Text>
          </div>
          <Card.Title className="text-sidebar-profile mt-3">Profilo pubblico e URL</Card.Title>
          <Card.Text className="text-sidebar-profile-small">
            <a href={`https://www.linkedin.com/in/${mainProfile.username}`}>
              {`https://www.linkedin.com/in/${mainProfile.username}`}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>{" "}
      <Card className="mt-3 mb-3 p-0">
        <Card.Img src="src\assets\ads.png"></Card.Img>
      </Card>
      <Card className="p-3">
        <Card.Body className="pt=0 mt=0">
          <Card.Title className="mb-3">Persone che potresti conoscere</Card.Title>
          <ListGroup variant="flush">
            {suggestedProfiles.map((profile) => (
              <ListGroup.Item key={profile._id} className="d-flex align-items-center ">
                <Image src={profile.image} roundedCircle width="50" height="50" className="me-3" />
                <div>
                  <div>
                    {profile.name} {profile.surname}
                  </div>
                  <div>{profile.title}</div>
                  <button type="button" className="collegati mt-2 mb-2">
                    <i className="bi bi-person-plus-fill me-2"></i>Collegati
                  </button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default Sidebar;
