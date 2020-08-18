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
        title="We are more trusted then 500 clients"
        detail="Without your customers, you would not exist. Your business would
              not flourish, and regardless of the product or service you
              provide, it would become null and void. You run a business
              primarily to help people or offer them something you believe in;
              you also run a business so you can turn a profit."
      />
      <Footer />
    </>
  );
};

export default Home;
