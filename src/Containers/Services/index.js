import React from "react";
import "./style.css";
import ServiceCard from "../../Components/ServiceCard";

import { FaSlack, FaClipboardList, FaLaptopCode } from "react-icons/fa";

const Services = (props) => {
  return (
    <>
      <div className="container mt-5 mb-5 text-center">
        <h1>Our Services</h1>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="row mt-4">
              <ServiceCard
                title="Accounting & Finance"
                detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              >
                <FaClipboardList size="3em" color="#ff656a" />
              </ServiceCard>
              <ServiceCard
                title="IT Services"
                detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              >
                <FaLaptopCode size="3em" color="#ff656a" />
              </ServiceCard>
              <ServiceCard
                title="Interior Designing"
                detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              >
                <FaSlack size="3em" color="#ff656a" />
              </ServiceCard>
              <div className="mt-5 mx-auto">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
