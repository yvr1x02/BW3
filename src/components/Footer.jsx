import { Col, Container, Form, Row } from "react-bootstrap";
import {
  GearFill,
  QuestionCircleFill,
  ShieldShaded,
} from "react-bootstrap-icons";
/* import { Link } from "react-router-dom"; */

function Footer() {
  return (
    <Container className=" card-linkedin-secondary footer-text mt-5  container-size">
      <Row>
        <Col lg={2}>
          <p>Informazioni</p>
        </Col>
        <Col lg={2}>
          <p>Accessibilità</p>
        </Col>
        <Col lg={2}>
          <p>Talent Solutions</p>
        </Col>
        <Col lg={3} className="d-flex">
          <QuestionCircleFill className="fs-5 me-2 footer-text-icons" />
          <div>
            <span className="footer-text-questions">Domande?</span>
            <br />
            Visita il nostro Centro assistenza.
          </div>
        </Col>
        <Col lg={3}>
          Seleziona lingua
          <Form.Select aria-label="Default select example" className="py-0">
            <option>seleziona lingua: italiano</option>
            <option value="1">ching chong </option>
            <option value="2">huga buga</option>
            <option value="3">din diling</option>
            <option value="4">ashc chuh</option>
            <option value="5">burp</option>
            <option value="6">zio can</option>
            <option value="7">hoiio iohoi</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <p>Linee guida della community</p>
        </Col>
        <Col lg={2}>
          <p>Carriera</p>
        </Col>
        <Col lg={2}>
          <p>Soluzioni di marketing</p>
        </Col>
        <Col lg={4} className="d-flex ">
          <GearFill className="fs-5 me-2 footer-text-icons" />
          <div>
            <span className="footer-text-questions">
              Gestisci il tuo account e la tua privacy
            </span>
            <br />
            Vai alle impostazioni
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <p>Privacy e condizioni</p>
        </Col>
        <Col lg={2}>
          <p>Opzioni per gli annunci pubblicitari</p>
        </Col>
        <Col lg={2}>
          <p>Pubblicità</p>
        </Col>
        <Col lg={3} className="d-flex mt-1 ">
          <ShieldShaded className="fs-5 me-2 footer-text-icons" />
          <div>
            <span className="footer-text-questions">
              Trasparenza sui contenuti consigliati
            </span>
            <br />
            Scopri di più sui contenuti consigliati.
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <p>Sales Solutions</p>
        </Col>
        <Col lg={2}>
          <p>Mobile</p>
        </Col>
        <Col lg={2}>
          <p>Piccole imprese</p>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <p>Centro sicurezza</p>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col lg={2}>
          <p>LinkedIn Corporation © 2024</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
