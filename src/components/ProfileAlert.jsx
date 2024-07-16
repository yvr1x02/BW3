import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function ProfileAlert() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary">
        <Alert.Heading>Disponibile a lavorare</Alert.Heading>
        <p>Ruoli di programmazione</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Mostra Alert</Button>}
    </>
  );
}

export default ProfileAlert;
