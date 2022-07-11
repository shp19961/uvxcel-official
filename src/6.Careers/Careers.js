import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { BsFillBriefcaseFill, BsCashStack } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaUserPlus, FaClock } from "react-icons/fa";

const Careers = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [jobSearch, setJobSearch] = useState("");

  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState([]);

  useEffect(() => {
    const getAllJobs = async () => {
      const getJobs = await axios.get(`http://localhost:5004/get-jobs`);
      setJobs(getJobs.data);
      // load first job for showing active on refreshing the page
      setCurrentJob(getJobs.data[0]);
      setTimeout(() => {
        document.querySelectorAll(".job-card")[0].classList.add("active-job");
      });
    };
    getAllJobs();
  }, []);

  const [formData, setFormData] = useState([]);

  const onEmailChange = (e) => {
    let emailData = e.target.value;
    var mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(emailData)) {
      setEmailErr(false);
      e.target.style.border = "2px solid green";
    } else {
      setEmailErr(true);
      e.target.style.border = "2px solid red";
    }

    setEmail(emailData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (emailErr === true) {
      toast.error("Please enter valid email");
    } else {
      await axios.post("http://localhost:5001/subscriber/save_email", formData);
      toast.success("Subscribed Successfully");
      const input = document.querySelector("#email");
      input.value = "";
      input.style.border = "";
    }
    console.warn(currentJob);
  };

  const loadCurrentJob = async (id, e) => {
    for (let job of jobs) {
      if (job._id === id) {
        setCurrentJob(job);
      }
    }
    document.querySelectorAll(".job-card").forEach((card) => {
      card.classList.remove("active-job");
    });
    e.target.closest(".card").classList.add("active-job");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="careers"
    >
      <div className="container">
        <ToastContainer autoClose={2000} className="toast-container" />
        <h1 className="career-title">Career Opportunities</h1>
        <div className="row justify-content-center">
          <div className="col-4">
            <input
              type="search"
              onChange={(e) => {
                setJobSearch(e.target.value);
              }}
              className="form-control search-job"
              placeholder="Search job"
            />
          </div>
        </div>
        <div className="row mt-md-5 mt-4">
          <div className="col-lg-5 col-md-6 scroll px-md-5">
            {jobs
              .filter((job) => {
                if (jobSearch === "") {
                  return job;
                } else if (
                  job.designation
                    .toLowerCase()
                    .includes(jobSearch.toLowerCase())
                ) {
                  return job;
                }
              })
              .map((job) => (
                <div
                  onClick={(e) => loadCurrentJob(job._id, e)}
                  className="card job-card shadow-sm mb-4"
                  key={job._id}
                >
                  <div className="card-body">
                    <h5 className="card-title">{job.designation}</h5>
                    <span>
                      <BsFillBriefcaseFill size={15} />
                      <span className="mx-2">{job.experience} Yrs</span>
                    </span>

                    <span className="mx-2">
                      <BsCashStack />
                      <span className="mx-1">
                        {job.salary ? job.salary : "Not Mentioned"}
                      </span>
                    </span>

                    <span className="mx-2">
                      <MdLocationOn />
                      <span className="mx-1">{job.location}</span>
                    </span>
                    <p className="card-text mt-2 skills">
                      {job.skills
                        ? job.skills.split(",").join(" . ")
                        : "Not Available"}
                    </p>
                  </div>
                </div>
              ))}

            {/* {jobs.map((job) => (
              <div
                onClick={(e) => loadCurrentJob(job._id, e)}
                className="card job-card shadow-sm mb-4"
                key={job._id}
              >
                <div className="card-body">
                  <h5 className="card-title">{job.designation}</h5>
                  <span>
                    <BsFillBriefcaseFill size={15} />
                    <span className="mx-2">{job.experience} Yrs</span>
                  </span>

                  <span className="mx-2">
                    <BsCashStack />
                    <span className="mx-1">
                      {job.salary ? job.salary : "Not Mentioned"}
                    </span>
                  </span>

                  <span className="mx-2">
                    <MdLocationOn />
                    <span className="mx-1">{job.location}</span>
                  </span>
                  <p className="card-text mt-2 skills">
                    {job.skills
                      ? job.skills.split(",").join(" . ")
                      : "Not Available"}
                  </p>
                </div>
              </div>
            ))} */}
          </div>
          <hr className="d-md-none d-block my-4" />
          <div className="col-lg-7 col-md-6">
            <div className="container-fluid job-description">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-11">
                  <div className="card job-description-card shadow-sm">
                    <div className="card-head p-3">
                      <h5 className="card-title">{currentJob.designation}</h5>
                      <p>
                        <MdLocationOn />
                        <span className="mx-2">{currentJob.location}</span>
                      </p>
                      <p>
                        <BsCashStack />
                        <span className="mx-2">
                          {currentJob.salary
                            ? currentJob.salary
                            : "Not Mentioned"}
                        </span>
                      </p>
                      <Link className="btn btn-info mt-2" to="/applyform">
                        Apply now
                      </Link>
                    </div>
                    <div className="card-body">
                      <h5 className="fw-bold">Full Job Description</h5>
                      <p className="card-text">
                        <br />
                        <span>{currentJob.desc}</span>
                      </p>
                      <p className="card-text">
                        Experience: {currentJob.experience} Years
                      </p>
                      <p className="card-text">Job type: {currentJob.type}</p>
                      <p className="card-text">Skills: {currentJob.skills}</p>
                      <p className="card-text">Schedule: {currentJob.shifts}</p>
                      <span className="card-text">
                        Benefits:
                        <ul>
                          <li>Cell phone reimbursement</li>
                          <li>Internet reimbursement</li>
                        </ul>
                      </span>
                      <hr />
                      <h5 className="fw-bold">Hiring Insights</h5>
                      <p>
                        <FaUserPlus /> Hiring{" "}
                        {currentJob.positions > 1
                          ? currentJob.positions + " candidates "
                          : "1 candidate "}
                        for this role
                      </p>
                      <p>
                        <FaClock /> Urgently hiring
                      </p>
                    </div>
                  </div>
                  <p className="fw-bold mt-5">
                    Interested candidates to send their profile to hr@uvxcel.com
                    OR use the link below to fill the Candidate Information
                    Form.
                    <br />
                    <Link
                      className=""
                      style={{ color: "blue" }}
                      to="/applyform"
                    >
                      Candidate Form
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row  justify-content-center">
          <div className="col-lg-8 col-md-9 col-12">
            <form onSubmit={(e) => onSubmit(e)} className="newsletter">
              <div className="row">
                <div className="col-12 col-md-8">
                  <input
                    onChange={(e) => onEmailChange(e)}
                    name="email"
                    value={email}
                    type="text"
                    id="email"
                    placeholder="Enter email to Subscribe news and updates"
                    className="form-control"
                    required
                  />
                  {emailErr ? (
                    <p className="text-danger">Email is not Valid</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-4 col-12">
                  <button className="main-btn" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;
