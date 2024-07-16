import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, updateExperience } from "../redux/reducers/experienceSlice";
import { Card, Button } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";

const ExperienceList = ({ userId }) => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.data);
  const status = useSelector((state) => state.experiences.status);
  const error = useSelector((state) => state.experiences.error);
  const [showModal, setShowModal] = useState(false);
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

  const handleEdit = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
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
        <Card key={exp._id} className="mb-3">
          <Card.Body>
            <Card.Title>{exp.role}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{exp.company}</Card.Subtitle>
            <Card.Text>{exp.description}</Card.Text>
            <Card.Text>{exp.area}</Card.Text>
            <Button variant="outline-primary" onClick={() => handleEdit(exp)}>Edit</Button>
          </Card.Body>
        </Card>
      ))}
      <ExperienceModal 
        show={showModal} 
        handleClose={handleClose} 
        handleSave={handleSave}
        experience={selectedExperience} 
      />
    </div>
  );
};

export default ExperienceList;
