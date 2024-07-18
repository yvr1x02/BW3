import { useState, useEffect } from "react";
import { Modal, Button,} from "react-bootstrap";
import FormPage from "./Form";

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
    <Modal className="modalCont" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{experience ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormPage />
      </Modal.Body>
      <Modal.Footer>
        {/* <Button className="" variant="secondary" onClick={handleClose}>
          Annulla
        </Button> */}
        <Button  className="btnForm mb-2" variant="primary" onClick={handleSubmit}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
