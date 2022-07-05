import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { jobs } from "./Data";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="container vh-100"
    >
      <ToastContainer autoClose={2000} className="toast-container" />
      <h1 className="career-title mb-4">Career Opportunities</h1>
      {jobs.map((job) => (
        <div className="row mt-md-1" key={job.designation}>
          <h4 className="career-deignation">
            <b>Designation:{job.designation}</b>
          </h4>
          <br></br>
          <div className="career-text">
            <p>
              <b>Responsibility : </b>
              {job.responsibilities}
            </p>
            <p>
              <b>Required Skills : </b>
              {job.skills}
            </p>
            <p>
              <b>Other Skills :</b>
              {job.other_skills}
            </p>
          </div>
          <div className="text-cente mt-1">
            <b className="send-profile">
              Interested candidates to send their profile to hr@uvxcel.com OR
              use the link below to fill the Candidate Information Form.
            </b>
            <br />
            <Link
              className="send-profile form-link"
              style={{ color: "blue" }}
              to="/applyform"
            >
              Candidate Form
            </Link>
          </div>
        </div>
      ))}

      <form onSubmit={(e) => onSubmit(e)} className="row subscribe-row">
        <div className="col-12 ">
          <label htmlFor="email">
            <b>Subscribe to our employment news and updates:</b>
          </label>
        </div>
        <div className="col-lg-6 col-10 d-flex">
          <input
            onChange={(e) => onEmailChange(e)}
            name="email"
            value={email}
            type="text"
            id="email"
            className="email-box mt-2 form-control"
            placeholder=" Enter email"
            required
          />
          <button
            type="submit"
            className="btn btn-danger rounded rounded-pill text-light mx-md-1 mx-2 mt-2 mt-md-2 fw-bold"
          >
            Subscribe
          </button>
        </div>
        {emailErr ? (
          <span className="text-danger">Email is not Valid</span>
        ) : (
          ""
        )}
      </form>
    </motion.div>
  );
};

export default Careers;
