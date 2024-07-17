import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ExperienceModal = ({ show, handleClose, handleSave, experience }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (experience) {
      setRole(experience.role);
      setCompany(experience.company);
      setStartDate(experience.startDate);
      setEndDate(experience.endDate);
      setDescription(experience.description);
      setArea(experience.area);
    }
  }, [experience]);

  const handleSubmit = () => {
    const exp = { role, company, startDate, endDate, description, area };
    handleSave(exp, image);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{experience ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRole">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCompany">
            <Form.Label>Azienda</Form.Label>
            <Form.Control
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formStartDate">
            <Form.Label>Data Inizio</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEndDate">
            <Form.Label>Data Fine</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formArea">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Immagine</Form.Label>
            <Form.Control
              type="file"
              onChange={handleImageChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annulla
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
