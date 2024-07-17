import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, BookmarkFill, EyeFill } from "react-bootstrap-icons";

function Attività() {
  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        <>
          <Card.Title>Attività</Card.Title>
          <Card.Text>
            <EyeFill className="ms-3" /> 2 milioni di follower
          </Card.Text>
          <Row>
            <Col lg={12}>
              <Card.Text className="d-flex">
                <p>Non hai ancora pubblicato nulla</p>
                <p>I post che condividi appariranno qui</p>
              </Card.Text>
            </Col>
          </Row>
          <Button variant="outline-secondary" className="rounded   ">
            <ArrowRight />
            Mostra tutte le analisi
          </Button>
        </>
      </Card>
    </Col>
  );
}

export default Attività;
