import React, { useEffect } from "react";
import "./style.css";
import VissionAboutCommon from "../../Containers/VissionAboutCommon";
import Header from "../../Containers/Header";
import Footer from "../../Containers/Footer";
import ParallaxDiv from "../../Components/ParallaxDiv";

const Decor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <ParallaxDiv heading="DECOR" image="decor" />
      <VissionAboutCommon
        title="Our Services"
        heading="We provide All kinds of  decor and Maintenance works. Our job is to provide high quality services with Customer's Satisfaction "
      />
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <ol>
              <li>Carpentery work</li>
              <li>Gypsum & False ceiling </li>
              <li>Gypsum & Glass partitions</li>
              <li>Paint & decor </li>
              <li>Electrical works</li>
              <li>Flooring & wall Tile works</li>
              <li>CCTV Camera installation</li>
              <li>Home & Office Automation</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Decor;
