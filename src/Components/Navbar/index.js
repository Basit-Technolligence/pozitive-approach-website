import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          <img
            style={{ width: "35%" }}
            src={require("../../Images/logo.png")}
          />
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

            <li class="nav-item dropdown">
              <a
                class="nav-link mr-5 dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SERVICES
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink class="dropdown-item" to="/services/accounting">
                  Accounting & Finance
                </NavLink>
                <NavLink class="dropdown-item" to="/services/it">
                  IT Services
                </NavLink>
                <NavLink class="dropdown-item" to="/services/decor">
                  Decor Work
                </NavLink>
                <NavLink class="dropdown-item" to="/services/realestate">
                  Real Estate
                </NavLink>
                <NavLink class="dropdown-item" to="/services/business">
                  Business Setup
                </NavLink>
              </div>
            </li>
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
