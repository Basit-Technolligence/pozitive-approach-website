import React, { useEffect } from "react";
import "./style.css";
import AboutUs from "../../Containers/About Us";
import Header from "../../Containers/Header";
import Footer from "../../Containers/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};
export default About;
