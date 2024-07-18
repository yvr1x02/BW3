import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchJobs } from "../redux/reducers/jobsSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { jobs, status, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");
    dispatch(fetchJobs(query));
  }, [dispatch, location.search]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(jobs) || jobs.length === 0) {
    return <p>No jobs found</p>;
  }

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.company_name}</p>
            <p>{job.category}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
