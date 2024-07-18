import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
  uploadExperienceImage,
} from "../redux/reducers/experienceSlice";
import { Card, Button, Modal, Image } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import { Pencil, Trash3Fill } from "react-bootstrap-icons";

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

  const handleSave = async (experience, image) => {
    let newExperience;
    if (selectedExperience) {
      newExperience = await dispatch(updateExperience({ userId, experienceId: selectedExperience._id, experience }));
    } else {
      newExperience = await dispatch(addExperience({ userId, experience }));
    }
    if (image) {
      await dispatch(uploadExperienceImage({ userId, experienceId: newExperience.payload._id, image }));
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
    <Card className="p-0 mt-2">
      <div className="d-flex border-bottom mx-4 mb-2">
        <Card.Title className=" mt-4 m-0 mb-4 ">Esperienze</Card.Title>
        <Button onClick={handleShow} className="btn-Add mt-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
          </svg>
        </Button>
      </div>
      {experiences.map((exp) => (
        <Card key={exp._id} className=" p-0 card-ex mx-2 border-bottom mb-2">
          <Card.Body className="p-0 ms-3">
            <div className="d-flex">
              <Image src={exp.image} rounded className="image-exp "></Image>
              <div className="mb-2">
                <Card.Title className="m-0">{exp.role}</Card.Title>
                <Card.Subtitle className="text-muted">{exp.company}</Card.Subtitle>
                <Card.Text className="m-0">{exp.description}</Card.Text>
                <Card.Text className="m-0">{exp.area}</Card.Text>
              </div>
              <Button onClick={() => handleEdit(exp)} className="btn-edit mt-2">
                <Pencil />
              </Button>
              <Button onClick={() => handleShowConfirm(exp)} className="btn-delete mt-2">
                <Trash3Fill />
              </Button>
            </div>
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
        <Modal.Body>Sei sicuro di voler eliminare questa esperienza?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ExperienceList;
