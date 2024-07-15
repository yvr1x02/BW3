import { Col, Container, Row } from "react-bootstrap";
import { QuestionCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Col>
      <Container className=" card-linkedin-secondary footer-text mt-2">
        <Row>
          <Col lg={2}>Informazioni</Col>
          <Col lg={2}>Accessibilità</Col>
          <Col lg={2}>Talent Solutions</Col>
          <Col lg={3}>
            <QuestionCircleFill />
            Domande? <br />
            Visita il nostro Centro assistenza.
          </Col>
          <Col lg={3}>Seleziona lingua</Col>
        </Row>
        <Row>
          <Col lg={2}>Linee guida della community</Col>
          <Col lg={2}>Carriera</Col>
          <Col lg={2}>Soluzioni di marketing</Col>
          <Col lg={3}>
            Gestisci il tuo account e la tua privacy <br />
            Vai alle impostazioni
          </Col>
        </Row>
        <Row>
          <Col lg={2}>Privacy e condizioni </Col>
          <Col lg={2}>Opzioni per gli annunci pubblicitari</Col>
          <Col lg={2}>Pubblicità</Col>
          <Col lg={3}>
            Trasparenza sui contenuti consigliati <br />
            Scopri di più sui contenuti consigliati.
          </Col>
        </Row>
        <Row>
          <Col lg={2}>Sales Solutions</Col>
          <Col lg={2}>Mobile</Col>
          <Col lg={2}>Piccole imprese</Col>
        </Row>
        <Row>
          <Col lg={2}>Centro sicurezza</Col>
        </Row>
        <Row>
          <Col lg={2}>LinkedIn Corporation © 2024</Col>
        </Row>
      </Container>
    </Col>
  );
}

export default Footer;
