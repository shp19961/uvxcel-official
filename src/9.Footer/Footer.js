import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white">
      <div className="container">
        <div className="row justify-content-around py-5">
          <div className="col-md-3 col-8">
            <h2>uvXcel</h2>
            <p>United We Excel</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              error.
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
          </div>
          <div className="col-md-3 col-8 mt-3 mt-md-0">
            <h6>Visit</h6>
            <p>Unit No. 223,Goodwill SquareMall, </p>
            <p>Dhanori, Pune, Maharashtra, India.</p>
            <div className="d-md-block d-none">
              <h6 className="mt-3">Enquiry</h6>
              <p>hr@uvxcel.com</p>
              <p>+91-20-67026259</p>
            </div>
          </div>
          <div className="col-md-2 col-4 mt-3 mt-md-0">
            <h6>Follow</h6>
            <p>
              <a href="https://www.linkedin.com/company/uvxcel-it-solutions/mycompany/">
                <BsLinkedin color="white" className="mb-2 icons" size={30} />
              </a>
            </p>
            <p>
              <a href="/contact">
                <BsGithub color="white" className="icons" size={30} />
              </a>
            </p>
          </div>
          <div className="col-8 d-md-none d-block">
            <h6 className="mt-3">Enquiry</h6>
            <p>hr@uvxcel.com</p>
            <p>+91-20-67026259</p>
          </div>
          <div className="col-md-2 col-4 mt-3 mt-md-0">
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
