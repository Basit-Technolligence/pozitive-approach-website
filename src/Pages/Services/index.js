import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";
import Footer from "../../Containers/Footer";
import Services from "../../Containers/Services";
import ServiceCard from "../../Components/ServiceCard";
import { FaHome, FaBusinessTime } from "react-icons/fa";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Services>
        <ServiceCard
          title="Business Setup"
          link="services/business"
          detail="If you're starting a small business or expanding an existing one, you need business plan."
        >
          <FaBusinessTime size="3em" color="#ff656a" />
        </ServiceCard>
        <ServiceCard
          title="Real Estate"
          link="services/realestate"
          detail="It is one of the most important sectors in the economy. Also source of income to many."
        >
          <FaHome size="3em" color="#ff656a" />
        </ServiceCard>
      </Services>

      <Footer />
    </>
  );
};
export default ServicePage;
