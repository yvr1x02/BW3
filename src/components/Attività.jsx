import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, BookmarkFill, EyeFill } from "react-bootstrap-icons";

function Attività() {
  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        <>
          <Card.Title className="ms-4 mt-4 m-0">Attività</Card.Title>
          <Card.Text className="ms-4 text-primary fw-semibold alert-text">2 milioni di follower</Card.Text>
          <Row>
            <Col lg={12}>
              <Card.Text className="ms-4">
                <p className="m-0 fw-semibold">Non hai ancora pubblicato nulla</p>
                <p> I post che condividi appariranno qui</p>
              </Card.Text>
            </Col>
          </Row>
          <Button className="rounded btn-analisi">
            Mostra tutte le analisi <ArrowRight />
          </Button>
        </>
      </Card>
    </Col>
  );
}

export default Attività;
