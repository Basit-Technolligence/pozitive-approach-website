import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const VideoContainer = () => {
  return (
    <>
      <div className="container-fluid bg-image">
        <div className="row">
          <div className="col-md-12">
            <div className="overlay">
              <h1>WE HELP YOU TO GROW YOUR BUSINESS</h1>
              <NavLink
                className="text-decoration-none footer-navlink"
                to="/about"
              >
                <button type="button" class="btn btn-theme mt-4">
                  LEARN MORE
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
