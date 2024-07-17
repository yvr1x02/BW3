import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, updateExperience, deleteExperience,addExperience } from "../redux/reducers/experienceSlice";
import { Card, Button, Modal } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";

const ExperienceList = ({ userId }) => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.data);
  const status = useSelector((state) => state.experiences.status);
  const error = useSelector((state) => state.experiences.error);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExperiences(userId));
    }
  }, [status, dispatch, userId]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setSelectedExperience(null);
  };

  const handleShowConfirm = (experience) => {
    setSelectedExperience(experience);
    setShowConfirmModal(true);
  };

  const handleCloseConfirm = () => setShowConfirmModal(false);

  const handleEdit = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  const handleDelete = async () => {
    await dispatch(deleteExperience({ userId, experienceId: selectedExperience._id }));
    dispatch(fetchExperiences(userId));
    handleCloseConfirm();
  };

  const handleSave = async (experience) => {
    if (selectedExperience) {
      await dispatch(updateExperience({ userId, experienceId: selectedExperience._id, experience }));
    } else {
      await dispatch(addExperience({ userId, experience }));
    }
    dispatch(fetchExperiences(userId));
    handleClose();
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Aggiungi Esperienza
      </Button>
      {experiences.map((exp) => (
        <Card key={exp._id} className=" p-0">
          <Card.Body>
            <Card.Title>{exp.role}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{exp.company}</Card.Subtitle>
            <Card.Text>{exp.description}</Card.Text>
            <Card.Text>{exp.area}</Card.Text>
            <Button variant="outline-primary" onClick={() => handleEdit(exp)}>Edit</Button>
            <Button variant="outline-danger" onClick={() => handleShowConfirm(exp)} className="ms-2">Delete</Button>
          </Card.Body>
        </Card>
      ))}
      <ExperienceModal 
        show={showModal} 
        handleClose={handleClose} 
        handleSave={handleSave}
        experience={selectedExperience} 
      />
      <Modal show={showConfirmModal} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Conferma Eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sei sicuro di voler eliminare questa esperienza?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExperienceList;
