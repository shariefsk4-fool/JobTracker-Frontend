import { useEffect, useState } from "react";
import API from "../api/axios";
import "../styles/dashboard.css";

function Dashboard() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs?page=0&size=10");
      setJobs(res.data.content);
    } catch (error) {
      console.error("Error fetching jobs", error);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "APPLIED":
        return "status status-applied";
      case "INTERVIEW":
        return "status status-interview";
      case "OFFER":
        return "status status-offer";
      case "REJECTED":
        return "status status-rejected";
      default:
        return "status";
    }
  };

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        My Job Applications
      </h1>

      <div className="dashboard-card">

        <table className="job-table">

          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>

            {jobs.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-row">
                  No job applications found
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job.id}>

                  <td>{job.companyName}</td>

                  <td>{job.position}</td>

                  <td>
                    <span className={getStatusClass(job.status)}>
                      {job.status}
                    </span>
                  </td>

                  <td>
                    {new Date(job.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;