import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  mt-3 mb-3">
        <NavLink className="navbar-brand" to="/" style={{ color: "#002d5b" }}>
          Pozitive Approach
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FaBars color="black" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-link mr-5" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link mr-5" to="/services">
              SERVICES
            </NavLink>
            <NavLink className="nav-link mr-5" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
