import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="container-fluid header-top">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-4">
                <div className="header-top-div">
                  <FaMapMarkerAlt />
                  <span className="ml-1 mt-5 mr-5">
                    Pozitive Approach AFZA PO Box 932
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header-top-div">
                  <FaEnvelope />
                  <span className="ml-2 mt-5">info@pozitiveapproach.ae</span>
                </div>
              </div>
              <div className="col-md-4">
                <ul className="social-icons d-flex justify-content-end">
                  <li>
                    <a href="#">
                      <FaFacebookF className="social-img" color="white" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram className="social-img" color="white" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter className="social-img" color="white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
