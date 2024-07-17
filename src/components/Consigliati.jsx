import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { fetchProfile } from "../redux/reducers/profileSlice";
import Button from "react-bootstrap/Button";
import { Alert, Col, Container, ProgressBar } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";

function Consigliati() {
  const [show, setShow] = useState(true);
  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        <>
          <Card.Title className="ms-4 mt-4 m-0">Consigliato per te </Card.Title>
          <Card.Text className="text-secondary">
            <EyeFill className="ms-4 " /> solo per te
          </Card.Text>
          <Card.Text className="ms-4 fw-semibold m-0">Intermedio</Card.Text>

          <ProgressBar now={60} variant="secondary" className="mx-3" />

          <Card.Text className="text-secondary ms-4 ">
            Completa 1 passaggio per raggiungereil livello
            <span className="text-primary"> Massimo</span>
          </Card.Text>
          <Container className="d-flex">
            <Col lg={6}>
              <Alert show={show} className="bg-alert-start text-black">
                <Alert.Heading className="alert-text m-0">
                  <svg className="camera">
                    <image
                      href="https://static.licdn.com/aero-v1/sc/h/7a68p3v6nxvny8qyhqzibgova"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                    ></image>
                  </svg>

                  <p className="space-Consigliati">Aggiungi competenze collegate alla tua esperienza</p>
                </Alert.Heading>
                <p className="alert-text m-0">
                  Distinguiti come professionista aggiungendo le tue competenze principali e le tue particolari
                  capacità.
                </p>

                <Button variant="outline-secondary " className="rounded-pill mx-2 mt-4">
                  Aggiungi una competenza
                </Button>
              </Alert>
            </Col>
            <Col lg={6}>
              <Alert show={show} className="bg-alert-start">
                <Alert.Heading className="alert-text m-0">
                  <svg className="camera">
                    <image
                      href="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                    ></image>
                  </svg>
                  <p className="space-Consigliati">
                    Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa
                  </p>
                </Alert.Heading>
                <p className="alert-text m-0">
                  Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
                </p>

                <Button variant="outline-secondary" className="rounded-pill mx-2  mt-2">
                  Aggiungi un riepilogo
                </Button>
              </Alert>
            </Col>
          </Container>
        </>
      </Card>
    </Col>
  );
}

export default Consigliati;
