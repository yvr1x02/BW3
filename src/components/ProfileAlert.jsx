import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function ProfileAlert() {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Alert show={show} className="bg-alert">
            <Alert.Heading className="alert-text m-0">
              Disponibile a lavorare
            </Alert.Heading>
            <p className="alert-text m-0">Ruoli di programmazione</p>
            <a href="#" className="alert-text">
              Mostra Dettagli
            </a>
          </Alert>
        </Col>
        <Col lg={6}>
          <Alert show={show} className="bg-alert-start">
            <Alert.Heading className="alert-text m-0">
              Fai sapere che stai facendo selezione e attrai
            </Alert.Heading>
            <p className="alert-text m-0">candidati qualificati.</p>
            <a href="#" className="alert-text">
              Inizia
            </a>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileAlert;
