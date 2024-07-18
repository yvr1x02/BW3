import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { ArrowRight, BookmarkFill, EyeFill } from "react-bootstrap-icons";

function Risorse() {
  return (
    <Col>
      <Card className="p-0 card-linkedin-secondary  mt-2">
        <>
          <Card.Title className="ms-4 mt-4 m-0">Risorse</Card.Title>
          <Card.Text className="text-secondary">
            <EyeFill className="ms-4" /> solo per te
          </Card.Text>
          <Row>
            <Col lg={12}>
              <Card.Text className="d-flex ms-4 border-bottom">
                <div className="me-2 ">
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
                  <p className="fw-semibold m-0">La mia rete</p>
                  <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
                </div>
              </Card.Text>
            </Col>
            <Col lg={12}>
              <Card.Text className="d-flex ms-4 mt-2">
                <div className="me-2">
                  <BookmarkFill />
                </div>
                <div>
                  <p className="fw-semibold m-0">Elementi salvati</p>
                  <p>Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
                </div>
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

export default Risorse;
