import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchJobs } from "../redux/reducers/jobsSlice";
import { Button, Spinner } from "react-bootstrap";
import { Lightbulb, Linkedin } from "react-bootstrap-icons";
import TopBar from "./Topbar";

const Jobs = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { jobs, status, error } = useSelector((state) => state.jobs);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");
    if (query) {
      dispatch(fetchJobs(query));
    } else if (location.state && location.state.jobs) {
      dispatch(fetchJobs(""));
    }
  }, [dispatch, location.search, location.state]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

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
    <>
      <TopBar></TopBar>
      <div className="container">
        <div className="row claseprova">
          <div className="col-md-4">
            <ul className="list-group">
              {jobs.length > 0 ? (
                jobs
                  .filter((job) => job.company_logo_url)
                  .map((job) => (
                    <li
                      key={job._id}
                      className={`list-group-item ${selectedJob && selectedJob._id === job._id ? "active" : ""}`}
                      onClick={() => handleJobClick(job)}
                      style={{ cursor: "pointer", background: "#ffffff", color: "black", border: "none" }}
                    >
                      <img src={job.company_logo_url} alt={`${job.company_name} logo`} />
                      <h4>{job.title}</h4>
                      <p>{job.company_name}</p>
                      <p>{job.category}</p>
                    </li>
                  ))
              ) : (
                <li className="list-group-item">No jobs found.</li>
              )}
            </ul>
          </div>

          <div className="col-md-8 contDettagliLavoro">
            {selectedJob ? (
              <div>
                <img src={selectedJob.company_logo_url} alt={`${selectedJob.company_name} logo`} />
                <h2>{selectedJob.title}</h2>
                <p>{selectedJob.company_name}</p>
                <p>{selectedJob.category}</p>
                <p>{selectedJob.job_type}</p>
                <p>
                  <Lightbulb /> Vedi un confronto con oltre 100 altri candidati.{" "}
                  <span>
                    {" "}
                    <p className="txtp">Prova Premium per 0 EUR</p>
                  </span>
                </p>
                <Button variant="primary rounded-pill mb-3">
                  <Linkedin className="mx-2 mb-1"></Linkedin>Candidatura semplice
                </Button>
                <Button variant="outline-primary rounded-pill mb-3 mx-3 px-3">
                  <strong>Salva</strong>
                </Button>
                <h4 className="mb-3">Informazioni sull'offerta di lavoro</h4>
                <div dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
                <p>Salary: {selectedJob.salary}</p>
                <h4>Useful Link:</h4>
                <Link to={selectedJob.url}>{selectedJob.url}</Link>
              </div>
            ) : (
              <div>Select a job to see details.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
