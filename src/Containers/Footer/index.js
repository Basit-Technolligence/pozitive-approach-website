import React from "react";
import "./style.css";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import CallRequest from "../CallRequest";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <CallRequest />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-3 m-5">
            <h1 style={{ fontSize: "40px" }}>Pozitive Approach</h1>
            <p className="mt-4" style={{ color: "grey" }}>
              We help you grow your business. We are providing multiple services
              which can take your business from ground to sky.
            </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4  mt-5">
                <h5 className="footer-heading">Company</h5>
                <NavLink className="text-decoration-none" to="/">
                  <h6 className="mt-4 footer-subheading">Home</h6>
                </NavLink>
                <NavLink className="text-decoration-none" to="/about">
                  <h6 className="mt-4 footer-subheading">About</h6>
                </NavLink>
                <NavLink className="text-decoration-none" to="/services">
                  <h6 className="mt-4 footer-subheading">Services</h6>
                </NavLink>
                <NavLink className="text-decoration-none" to="/contact">
                  <h6 className="mt-4 footer-subheading">Contact</h6>
                </NavLink>
              </div>
              <div className="col-md-4  mt-5">
                <h5 className="footer-heading">Services</h5>
                <NavLink
                  className="text-decoration-none"
                  to="/services/accounting"
                >
                  <h6 className="mt-4 footer-subheading">
                    Accounting & Finance
                  </h6>
                </NavLink>
                <NavLink className="text-decoration-none" to="/services/it">
                  <h6 className="mt-4 footer-subheading">IT Services</h6>
                </NavLink>
                <NavLink
                  className="text-decoration-none"
                  to="/services/business"
                >
                  <h6 className="mt-4 footer-subheading">Business Setup</h6>
                </NavLink>
                <NavLink
                  className="text-decoration-none"
                  to="/services/realestate"
                >
                  <h6 className="mt-4 footer-subheading">Real Estate</h6>
                </NavLink>
                <NavLink className="text-decoration-none" to="/services/decor">
                  <h6 className="mt-4 footer-subheading">Decor Work</h6>
                </NavLink>
              </div>
              <div className="col-md-4  mt-5">
                <h5 className="footer-heading">Get In Touch</h5>
                <h6 className="mt-4 footer-subheading">
                  <FaPhoneAlt /> +971507348134
                </h6>
                <h6 className="mt-4 footer-subheading">
                  <FaEnvelope /> info@pozitiveapproach.ae
                </h6>
                <h6 className="mt-4 footer-subheading">
                  <FaMapMarkerAlt />
                  Pozitive Approach, AFZA, PO Box 932
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-column text-center mt-5 mb-5">
          <hr style={{ width: "80%" }} />
          <h6 className="mt-5" style={{ color: "grey" }}>
            Copyright ©2020 All rights reserved
          </h6>
        </div>
      </div>
    </>
  );
};
export default Footer;
