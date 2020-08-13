import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const ServiceCard = (props) => {
  return (
    <>
      <div className="col-md-4  service-card pt-5 pb-5">
        {props.children}
        <h4 className="mt-4 mb-3">{props.title}</h4>
        <p>{props.detail}</p>
        <NavLink className="text-decoration-none footer-navlink" to="/services">
          <button type="button" class="btn btn-view-services mt-4">
            VIEW
          </button>
        </NavLink>
      </div>
    </>
  );
};
export default ServiceCard;
