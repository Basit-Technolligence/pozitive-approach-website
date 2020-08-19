import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";
import ImageOverlay from "../../Containers/ImageOverlay";
import Services from "../../Containers/Services";
import { NavLink } from "react-router-dom";
import CallRequest from "../../Containers/CallRequest";
import Footer from "../../Containers/Footer";
import ClientTrust from "../../Containers/ClientTrust";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <ImageOverlay />
      <Services>
        <NavLink className="text-decoration-none footer-navlink" to="/services">
          <button type="button" class="btn btn-theme mt-4">
            MORE SERVICES
          </button>
        </NavLink>
      </Services>
      <ClientTrust
        title="We are trusted by more than 500 clients"
        detail="Pozitive Approach strictly believes that its existence in the market depends on its customers. The products and services that we provide are only successful due to the fact that you as customer believe in us. We help you to flourish your business not only to gaint clients but to create a long term relationship based on mutual understanding and profits."
      />
      <Footer />
    </>
  );
};

export default Home;
