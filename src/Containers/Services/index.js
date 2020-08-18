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
            <div className="row justify-content-center mt-4">
              <ServiceCard
                title="Accounting & Finance"
                link="services/accounting"
                detail="It helps you track income and expenditures and provide quantitative financial information."
              >
                <FaClipboardList size="3em" color="#ff656a" />
              </ServiceCard>
              <ServiceCard
                link="services/it"
                title="IT Services"
                detail="With the introduction of computers, the business world can change forever."
              >
                <FaLaptopCode size="3em" color="#ff656a" />
              </ServiceCard>
              <ServiceCard
                title="Decor Works"
                link="services/decor"
                detail="Workplace style and design are significant for work excellence and effectiveness."
              >
                <FaSlack size="3em" color="#ff656a" />
              </ServiceCard>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
