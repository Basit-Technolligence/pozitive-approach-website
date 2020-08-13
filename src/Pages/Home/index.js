import React from "react";
import "./style.css";
import Header from "../../Containers/Header";
import ImageOverlay from "../../Containers/ImageOverlay";
import Services from "../../Containers/Services";
import { NavLink } from "react-router-dom";
import CallRequest from "../../Containers/CallRequest";
import Footer from "../../Containers/Footer";
import ClientTrust from "../../Containers/ClientTrust";

const Home = () => {
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
      <ClientTrust />
      <CallRequest />
      <Footer />
    </>
  );
};

export default Home;
