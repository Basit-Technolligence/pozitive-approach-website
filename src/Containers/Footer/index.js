import React from "react";
import "./style.css";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-3 m-5">
            <h1 style={{ fontSize: "40px" }}>Pozitive Approach</h1>
            <p className="mt-4" style={{ color: "grey" }}>
              We help you to grow your business. We are providing multiple
              services which can take your business from ground to sky.
            </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4  mt-5">
                <h5 className="footer-heading">Company</h5>
                <h6 className="mt-4 footer-subheading">Home</h6>
                <h6 className="mt-4 footer-subheading">About</h6>
                <h6 className="mt-4 footer-subheading">Services</h6>
                <h6 className="mt-4 footer-subheading">Contact</h6>
              </div>
              <div className="col-md-4  mt-5">
                <h5 className="footer-heading">Services</h5>
                <h6 className="mt-4 footer-subheading">Accounting & Finance</h6>
                <h6 className="mt-4 footer-subheading">IT Services</h6>
                <h6 className="mt-4 footer-subheading">
                  Company Info/Pro Service
                </h6>
                <h6 className="mt-4 footer-subheading">
                  Real Estate Sale & Purchase
                </h6>
                <h6 className="mt-4 footer-subheading">Interior Designing</h6>
              </div>
              <div className="col-md-4  mt-5">
                <h5 className="footer-heading">Get In Touch</h5>
                <h6 className="mt-4 footer-subheading">
                  <FaPhoneAlt /> +923035226823
                </h6>
                <h6 className="mt-4 footer-subheading">
                  <FaEnvelope /> info@consulting.com
                </h6>
                <h6 className="mt-4 footer-subheading">
                  <FaMapMarkerAlt />
                  65/A, 17th floor, Kings land, New York
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
