import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, BookmarkFill, EyeFill } from "react-bootstrap-icons";
function Interessi() {
  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        <>
          <Card.Title>Interessi</Card.Title>
          <Card.Text>
            <EyeFill className="ms-3" />
            aziende
          </Card.Text>
          <Row>
            <Col lg={12}>
              <Card.Text className="d-flex">
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
