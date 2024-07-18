import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, BookmarkFill, EyeFill } from "react-bootstrap-icons";
function Interessi() {
  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        <>
          <Card.Title className="ms-4 mt-4 m-0">Interessi</Card.Title>
          <Card.Text className="ms-4 me-4 text-success border-bottom ">Aziende</Card.Text>
          <Row>
            <Col lg={12}>
              <Card.Text className="d-flex ms-4">
                <p>Non hai ancora pubblicato nulla</p>
                <p>I post che condividi appariranno qui</p>
              </Card.Text>
            </Col>
          </Row>
        </>
      </Card>
    </Col>
  );
}

export default Interessi;
