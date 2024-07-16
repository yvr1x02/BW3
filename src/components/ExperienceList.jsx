import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences } from "../redux/reducers/experienceSlice";
import { Card, Button } from "react-bootstrap";

const ExperienceList = ({ userId }) => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.data);
  const status = useSelector((state) => state.experiences.status);
  const error = useSelector((state) => state.experiences.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchExperiences(userId));
    }
  }, [status, dispatch, userId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {experiences.map((exp) => (
        <Card key={exp._id} className=" p-0">
          <Card.Body>
            <Card.Title>{exp.role}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted mt-3">
              {exp.company}
            </Card.Subtitle>
            <div className="d-flex justify-content-between">
              <Card.Text>{exp.description}</Card.Text>

              <Button variant="outline-primary">Edit</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ExperienceList;
