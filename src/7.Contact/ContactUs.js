import axios from "axios";
import React, { useState } from "react";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { codes } from "./countryCodes";
import { motion } from "framer-motion";
import { GrLocation } from "react-icons/gr";
import { MdCall } from "react-icons/md";

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
    <section className="contact">
      <motion.div>
        <ToastContainer autoClose={2000} className="toast-container" />
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container"
        >
          <div className="text-center">
            <h5 className="text-uppercase" style={{ color: "deeppink" }}>
              Let's Start a Conversation
            </h5>
            <h1 className="fw-bold">Contact Us</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-2">
              <div className="address">
                <h4 className="mb-4">Our Office</h4>
                <p>
                  <GrLocation />
                  <span className="mx-2">
                    Unit No. 223, Goodwill SquareMall, Dhanori, Pune
                  </span>
                </p>
                <p className="bg-light">
                  <iframe
                    className="gmap_iframe"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?hl=en&amp;q=uvxcel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </p>
                <hr />
                <p>
                  <MdCall />
                  <span className="mx-2">
                    For Enquiry: +91-20-67026259 | marketing@uvxcel.com
                  </span>
                </p>
                <hr />
                <p>
                  <BsFillEnvelopeFill />
                  <span className="mx-2">
                    For career opportunities: hr@uvxcel.com
                  </span>
                </p>
                <hr />
                {/* <div className="social-media mt-5">
                  <a href="https://www.linkedin.com/company/uvxcel-it-solutions/mycompany/">
                    <BsLinkedin size={30} />
                  </a>
                  <a href="/contact" className="mx-4">
                    <BsGithub size={30} />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-md-7 p-5">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="mb-3 col-6">
                    <div className="form-group">
                      <input
                        onChange={(e) => onNameChange(e)}
                        type="text"
                        name="name"
                        value={name}
                        className="form-control p-3"
                        id="name"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    {nameErr ? (
                      <span className="text-danger">
                        Min 4 characters required
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-3 col-6">
                    <div className="form-group">
                      <input
                        onChange={(e) => onEmailChange(e)}
                        type="text"
                        name="email"
                        value={email}
                        className="form-control p-3"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    {emailErr ? (
                      <span className="text-danger">Email is not Valid</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-6">
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <select
                          id="mySelect"
                          style={{
                            width: "120px",
                            border: "2px solid orange",
                          }}
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
                          className="form-control p-3"
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
                  </div>
                  <div className="col-6">
                    <div className="form-group mb-3">
                      <input
                        maxLength={18}
                        onChange={(e) => onSubjectChange(e)}
                        type="text"
                        name="subject"
                        value={subject}
                        className="form-control p-3"
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
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-3">
                      <textarea
                        maxLength={45}
                        onChange={(e) => onHelpChange(e)}
                        cols="30"
                        name="helptext"
                        value={helptext}
                        rows="4"
                        type="text"
                        className="form-control p-3 text"
                        id="help"
                        placeholder="How Can We help You ?"
                        required
                      />
                      {helpErr ? (
                        <span className="text-danger">
                          Please enter something
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <span className="form-group">
                    <button
                      style={{ width: "100%" }}
                      type="submit"
                      id="submit-btn"
                      className="btn btn-primary p-2"
                    >
                      Send Message
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
