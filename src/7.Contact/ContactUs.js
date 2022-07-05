import axios from "axios";
import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { codes } from "./countryCodes";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectErr, setSubjectErr] = useState(false);

  const [helptext, setHelpText] = useState("");
  const [helpErr, setHelpErr] = useState(false);

  const [countrycode, setCountryCode] = useState("+7 840");

  const [mobile, setMobile] = useState("");
  const [mobileErr, setMobileErr] = useState(false);

  const [formData, setFormData] = useState([]);

  const onNameChange = (e) => {
    let nameData = e.target.value;
    if (nameData.length < 1) {
      e.target.style.border = "2px solid red";
      setNameErr(true);
    } else {
      setNameErr(false);
      e.target.style.border = "2px solid green";
    }
    setName(nameData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const onMobileChange = (e) => {
    let mobileData = e.target.value;
    var mobileformat = /^\d{10}$/;
    // var mobileformat = /^\+?([0-9]{0,2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/
    if (mobileData.match(mobileformat)) {
      setMobileErr(false);
      e.target.style.border = "2px solid green";
    } else {
      setMobileErr(true);
      e.target.style.border = "2px solid red";
    }
    setMobile(mobileData);
    setFormData({ ...formData, [e.target.name]: countrycode + e.target.value });
  };

  const onSubjectChange = (e) => {
    let subjectData = e.target.value;
    if (subjectData.length < 1) {
      e.target.style.border = "2px solid red";
      setSubjectErr(true);
    } else {
      setSubjectErr(false);
      e.target.style.border = "2px solid green";
    }
    setSubject(subjectData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHelpChange = (e) => {
    let helpData = e.target.value;
    if (helpData.length < 1) {
      e.target.style.border = "2px solid red";
      setHelpErr(true);
    } else {
      setHelpErr(false);
      e.target.style.border = "2px solid green";
    }
    setHelpText(helpData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    setFormData({ ...formData });
    e.preventDefault();
    if (
      nameErr === true ||
      emailErr === true ||
      mobileErr === true ||
      subjectErr === true ||
      helpErr === true
    ) {
      toast.error("Please enter correct details in the form");
    } else {
      await axios.post("http://localhost:5001/save_data", formData);
      toast.success("DATA SENT SUCCESSFULLY");
      const inputs = document.querySelectorAll(
        "#name, #email, #mobile, #sub, #help"
      );
      inputs.forEach((input) => {
        input.value = "";
        input.style.border = "";
      });
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
      <div className="row">
        <div className="col-lg-6 contact-left-side">
          <div className="address">
            <h1>Contact us</h1>
            <p className="mt-lg-5 mt-2">
              <b>Our Office</b>
            </p>
            <span>Address:</span>
            <p>Unit No. 223, Goodwill SquareMall, Dhanori, Pune</p>
            <p>For Enquiry: +91-20-67026259 | marketing@uvxcel.com</p>
            <p>For career opportunities: hr@uvxcel.com</p>
            <div className="social-media mt-3">
              <a href="https://www.linkedin.com/company/uvxcel-it-solutions/mycompany/">
                <BsLinkedin size={30} />
              </a>
              <a href="/contact" className="mx-4">
                <BsGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 contact-right-side">
          <div className="card shadow-sm p-4">
            <form onSubmit={(e) => onSubmit(e)} className=" row">
              <div className="mb-3">
                <input
                  onChange={(e) => onNameChange(e)}
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  required
                />
                {nameErr ? (
                  <span className="text-danger">Min 4 characters required</span>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <input
                  onChange={(e) => onEmailChange(e)}
                  type="text"
                  name="email"
                  value={email}
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
                {emailErr ? (
                  <span className="text-danger">Email is not Valid</span>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <select
                    id="mySelect"
                    style={{ width: "180px", border: "2px solid lightblue" }}
                    onChange={(e) => {
                      setCountryCode(e.target.value);
                    }}
                    className="input-group-text btn btn-white"
                  >
                    {codes.map((code) => {
                      return (
                        <option key={code.name} value={code.code}>
                          {code.name} {code.code}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    onChange={(e) => onMobileChange(e)}
                    type="text"
                    name="mobile"
                    value={mobile}
                    className="form-control"
                    id="mobile"
                    placeholder="Enter Mobile number"
                    required
                  />
                  {mobileErr ? (
                    <span className="text-danger">
                      Please enter valid mobile number
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="mb-3">
                <input
                  maxLength={18}
                  onChange={(e) => onSubjectChange(e)}
                  type="text"
                  name="subject"
                  value={subject}
                  className="form-control"
                  id="sub"
                  placeholder="Subject"
                  required
                />
                {subjectErr ? (
                  <span className="text-danger">
                    You can not leave this blank
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <textarea
                  maxLength={45}
                  onChange={(e) => onHelpChange(e)}
                  cols="40"
                  name="helptext"
                  value={helptext}
                  rows="2"
                  type="text"
                  className="form-control text"
                  id="help"
                  placeholder="How Can We help You ?"
                  required
                />
                {helpErr ? (
                  <span className="text-danger">Please enter something</span>
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  id="submit-btn"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
