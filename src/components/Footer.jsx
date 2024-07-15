import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Col>
      <Container className=" card-linkedin-secondary  mt-2">
        <div>
          <a
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="#"
          >
            Underline opacity 0
          </a>
          <a
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="#"
          >
            Underline opacity 0
          </a>
          <a
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="#"
          >
            Underline opacity 0
          </a>
        </div>
      </Container>
    </Col>
  );
}

export default Footer;
