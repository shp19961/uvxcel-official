import React from "react";
import { NavLink } from "react-router-dom";
import img from "../uvxcel.png";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const closeCollapsedNavbarOnClick = () => {
    document.getElementById("navbarNav").classList.remove("show");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top px-md-4 px-2">
      <div className="container-fluid">
        <img className="navbar-brand" src={img} alt="...." />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            <FaAlignJustify color="black" size={18} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                onClick={closeCollapsedNavbarOnClick}
                className="nav-link mx-2"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={closeCollapsedNavbarOnClick}
                className="nav-link mx-2"
                to="/about"
              >
                About us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                onClick={closeCollapsedNavbarOnClick}
                className="nav-link mx-2"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={closeCollapsedNavbarOnClick}
                className="nav-link mx-2"
                to="/technologies"
              >
                Technologies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={closeCollapsedNavbarOnClick}
                className="nav-link mx-2"
                to="/careers"
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={closeCollapsedNavbarOnClick}
                className="nav-link mx-2"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
