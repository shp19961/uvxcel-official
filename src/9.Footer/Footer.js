import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../uvxcel.png";

const Footer = () => {
  return (
    <footer className="container-fluid text-white">
      <div className="container">
        <div className="row justify-content-around py-5">
          <div className="col-md-3 col-8">
            <div className="row mb-3">
              <div className="col-7">
                <img className="footer-logo" src={logo} alt="...." />
              </div>
            </div>

            <p>
              We aim to emerge as the Preferred technology partner for our
              client.
            </p>
          </div>
          <div className="col-md-2 col-4">
            <h6>Explore</h6>
            <p>
              <Link className="explore-link" to="/">
                Home
              </Link>
            </p>

            <p>
              <Link className="explore-link" to="/about">
                About
              </Link>
            </p>

            <p>
              <Link className="explore-link" to="/careers">
                Careers
              </Link>
            </p>

            <p>
              <Link className="explore-link" to="/technologies">
                Technologies
              </Link>
            </p>
            <p>
              <Link className="explore-link" to="/resources">
                Resources
              </Link>
            </p>
          </div>
          <div className="col-md-3 col-8 mt-4 mt-md-0">
            <h6>Visit</h6>
            <p>Unit No. 223,Goodwill SquareMall, </p>
            <p>Dhanori, Pune, Maharashtra, India.</p>
            <div className="d-md-block d-none">
              <h6 className="mt-4">Enquiry</h6>
              <p>hr@uvxcel.com</p>
              <p>+91-20-67026259</p>
            </div>
          </div>
          <div className="col-md-2 col-4 mt-4 mt-md-0">
            <h6>Follow</h6>
            <p>
              <a href="https://www.linkedin.com/company/uvxcel-it-solutions/mycompany/">
                <BsLinkedin color="white" className="my-2 icons" size={30} />
              </a>
            </p>
            <p>
              <a href="/contact">
                <BsGithub color="white" className="icons" size={30} />
              </a>
            </p>
          </div>
          <div className="col-8 d-md-none d-block">
            <h6 className="mt-4">Enquiry</h6>
            <p>hr@uvxcel.com</p>
            <p>+91-20-67026259</p>
          </div>
          <div className="col-md-2 col-4 mt-4 mt-md-0">
            <h6>Legal</h6>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="row justify-content-around pb-2">
          <div className="col-lg-6">
            <p>Copyright © uvXcel Pvt. Ltd. All Rights Reserved</p>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
