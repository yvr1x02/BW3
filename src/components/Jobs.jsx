import { useEffect } from "react";
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
              <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
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
