import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { jobs } from "./Data";
import { motion } from "framer-motion";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Careers = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

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
  };

  return (
    <section className="careers">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="container"
      >
        <ToastContainer autoClose={2000} className="toast-container" />
        <h1 className="career-title mb-4">Career Opportunities</h1>

        <div className="row justify-content-center">
          {jobs.map((job) => (
            <div className="col-md-3" key={job.id}>
              <div className="card job-card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title">{job.designation}</h5>

                  <span>
                    <BsFillBriefcaseFill size={15} />
                    <span className="mx-2">{job.experience} Yrs</span>
                  </span>

                  <span className="mx-3">
                    <FaRupeeSign size={14} />
                    <span className="mx-1">{job.salary}</span>
                  </span>

                  <span className="mx-3">
                    <MdLocationOn />
                    <span className="mx-1">{job.location}</span>
                  </span>
                  <p className="card-text mt-2 skills">{job.skills}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-12">
            <p className="fw-bold">
              Interested candidates to send their profile to hr@uvxcel.com OR
              use the link below to fill the Candidate Information Form.
              <br />
              <Link
                className="send-profile form-link"
                style={{ color: "blue" }}
                to="/applyform"
              >
                Candidate Form
              </Link>
            </p>
          </div>
        </div>

        <form onSubmit={(e) => onSubmit(e)} className="newsletter">
          <div className="row">
            <div className="col-md-8 col-12">
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
            </div>
            <div className="col-md-4 col-12">
              <button className="main-btn" type="submit">
                Subscribe
              </button>
            </div>
          </div>
          {emailErr ? (
            <span className="text-danger">Email is not Valid</span>
          ) : (
            ""
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Careers;
