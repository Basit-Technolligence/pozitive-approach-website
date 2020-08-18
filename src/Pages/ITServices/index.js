import React, { useEffect } from "react";
import "./style.css";
import VissionAboutCommon from "../../Containers/VissionAboutCommon";
import Header from "../../Containers/Header";
import ParallaxDiv from "../../Components/ParallaxDiv";
import Footer from "../../Containers/Footer";

const ITServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <ParallaxDiv heading="IT SERVICES" image="it" />
      <VissionAboutCommon
        title="Logo Designing"
        heading="We guide you to seek the properties that fit with your specific needs. We help our clients in buying, selling and investing in all kind of properties maybe it be an exclusive luxury property or a specific budgeted one. We take pride in offering a personal and professional service, delivering exceptional value."
      />
      <div className="container mb-5 mt-5">
        <div className="row"></div>
      </div>
      <Footer />
    </>
  );
};
export default ITServices;
