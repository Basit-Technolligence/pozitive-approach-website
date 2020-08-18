import React, { useEffect } from "react";
import "./style.css";
import VissionAboutCommon from "../../Containers/VissionAboutCommon";
import Header from "../../Containers/Header";
import ParallaxDiv from "../../Components/ParallaxDiv";
import Footer from "../../Containers/Footer";

const RealEstate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <ParallaxDiv heading="REAL ESTATE" image="real" />
      <VissionAboutCommon
        title="WE PROVIDE YOU THE FOLLOWING"
        heading="We guide you to seek the properties that fit with your specific needs. We help our clients in buying, selling and investing in all kind of properties maybe it be an exclusive luxury property or a specific budgeted one. We take pride in offering a personal and professional service, delivering exceptional value."
      />
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <ol>
              <li>An absolutely free of cost evaluation</li>
              <li>
                Keep in regular contact to understand your wishlist and needs to
                find the best solutions
              </li>
              <li>
                Secure your investment at the right price, market your property
                and to inform you about properties that are off-market
              </li>
              <li>
                Make sure that we give you a proper detail about the
                regulations, laws and key developments of the location of your
                key interest
              </li>
              <li>
                Draft offers, negotiating for the most competitive prices Deal
                with contracts, paperwork and insurance
              </li>
              <li>
                Shortlist suitable properties that meet your requirements as
                well as show you the local area, amenities and prices
              </li>
              <li>
                Always be available even after handing or taking over is
                completed
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default RealEstate;
