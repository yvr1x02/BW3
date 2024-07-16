import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, addExperience, updateExperience, deleteExperience } from "../redux/reducers/experiencesSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Esperienza = ({ userId }) => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.experiences);
  const experienceStatus = useSelector((state) => state.experiences.status);
  const error = useSelector((state) => state.experiences.error);

  const [showModal, setShowModal] = useState(false);
  const [currentExperience, setCurrentExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (experienceStatus === "idle") {
      dispatch(fetchExperiences(userId));
    }
  }, [experienceStatus, dispatch, userId]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience({ ...currentExperience, [name]: value });
  };

  const handleSubmit = () => {
    if (editMode) {
      dispatch(updateExperience({ userId, expId: currentExperience._id, experience: currentExperience }));
    } else {
      dispatch(addExperience({ userId, experience: currentExperience }));
    }
    handleCloseModal();
  };

  const handleEdit = (experience) => {
    setCurrentExperience(experience);
    setEditMode(true);
    handleShowModal();
  };

  const handleDelete = (expId) => {
    dispatch(deleteExperience({ userId, expId }));
  };

  return (
    <div>
      <Button onClick={handleShowModal}>Add Experience</Button>
      {experienceStatus === "loading" && <div>Loading...</div>}
      {experienceStatus === "failed" && <div>{error}</div>}
      {experienceStatus === "succeeded" &&
        experiences.map((exp) => (
          <Card key={exp._id} style={{ margin: "10px 0" }}>
            <Card.Body>
              <Card.Title>{exp.role}</Card.Title>
              <Card.Text>
                {exp.company} | {exp.startDate} - {exp.endDate}
              </Card.Text>
              <Card.Text>{exp.description}</Card.Text>
              <Card.Text className="text-secondary">{exp.area}</Card.Text>
              <Button variant="secondary" onClick={() => handleEdit(exp)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDelete(exp._id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Experience" : "Add Experience"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" name="role" value={currentExperience.role} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" value={currentExperience.company} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="startDate" value={currentExperience.startDate} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="endDate" value={currentExperience.endDate} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={currentExperience.description} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formArea">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" name="area" value={currentExperience.area} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              {editMode ? "Save Changes" : "Add Experience"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Esperienza;
