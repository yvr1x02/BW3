import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchJobs } from "../redux/reducers/jobsSlice";
import { Spinner } from "react-bootstrap";

const Jobs = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { jobs, status, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");
    if (query) {
      dispatch(fetchJobs(query));
    } else if (location.state && location.state.jobs) {
      dispatch(fetchJobs(""));
    }
  }, [dispatch, location.search, location.state]);

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job._id}>
              <h2>{job.title}</h2>
              <p>{job.company_name}</p>
              <p>{job.category}</p>
              <div dangerouslySetInnerHTML={{ __html: job.description }} />
            </li>
          ))
        ) : (
          <li>No jobs found.</li>
        )}
      </ul>
    </div>
  );
};

export default Jobs;
