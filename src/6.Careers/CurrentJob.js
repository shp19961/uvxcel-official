import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const CurrentJob = () => {
  const [currentJob, setCurrentJob] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const loadCurrentJob = async () => {
      const getCurrentJob = await axios.get(
        `http://localhost:5004/get-current-job/${id}`
      );
      setCurrentJob(getCurrentJob.data);
    };
    loadCurrentJob();
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="current-job container-fluid"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 pb-4 text-center">
            <Link to="/careers" className="btn btn-outline-primary">
              Back to careers page
            </Link>
          </div>

          <div className="col-md-6">
            <div className="card px-2 shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center">
                  {currentJob.designation}
                </h2>
                <hr />
                <p className="card-text">
                  <b>Experience:</b> {currentJob.experience}
                </p>
                <p className="card-text">
                  <b>Salary:</b> {currentJob.salary}
                </p>
                <p className="card-text">
                  <b>Loaction:</b> {currentJob.location}
                </p>
                <p className="card-text">
                  <b>Skills:</b> {currentJob.skills}
                </p>
                <Link className="btn btn-info" to="/applyform">
                  Quick apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentJob;
