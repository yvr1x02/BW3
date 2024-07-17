import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { fetchProfile } from "../redux/reducers/profileSlice";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, EyeFill } from "react-bootstrap-icons";

function Analisi() {
  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        <>
          <Card.Title>Analisi</Card.Title>
          <Card.Text>
            <EyeFill className="ms-3" /> solo per te
          </Card.Text>
          <Row>
            <Col lg={4}>
              <Card.Text className="d-flex">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                </div>
                <div>
                  <p>4.5 milioni di visualizzazioni del profilo</p>
                  <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
                </div>
              </Card.Text>
            </Col>
            <Col lg={4}>
              <Card.Text className="d-flex">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                  </svg>
                </div>
                <div>
                  <p>15 bilioni di impressioni del post </p>
                  <p>Crea un post per aumentare l'interesse.</p>
                  <p>ultimi 7 giorni</p>
                </div>
              </Card.Text>
            </Col>
          </Row>
          <Button variant="outline-secondary" className="rounded   ">
            <ArrowRight />
            Mostra tutte le analisi{" "}
          </Button>
        </>
      </Card>
    </Col>
  );
}

export default Analisi;
