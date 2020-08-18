import React, { useEffect } from "react";
import "./style.css";
import Footer from "../../Containers/Footer";
import Header from "../../Containers/Header";
import ParallaxDiv from "../../Components/ParallaxDiv";
import VissionAboutCommon from "../../Containers/VissionAboutCommon";

const BusinessSetup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <ParallaxDiv heading="BUSINESS SETUP" image="business" />
      <VissionAboutCommon title="Company Formation" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-justify mx-auto">
            <h6>LICENSES:</h6>
            <p>
              Getting a business license is one of the essential steps to set up
              a business. For new- comers and first timers this method can be
              rather confusing and turn out to be expensive too if not done
              correctly. The first step to setting up a company is to first
              decide which activity or expertise are you looking to establish
              in. We at Pozitive Approach will guide you for obtaining the right
              license for your business hence save you the time and cost.
            </p>
            <ul>
              <li>
                <b>COMMERCIAL LICENSE</b> - are for businessmen who want to set
                up a new company having numerous trading activities.
              </li>
              <li>
                <b>PROFESSIONAL LICENSE</b> - needed for the Law firms,
                Institutions, Finance Houses, Management and marketing
                consultancy, Medical business, IT companies etc.
              </li>
              <li>
                <b>INDUSTRIAL LICENSE</b> - are issued for industrial companies
                and producing enterprises that convert natural resources or
                material into the end products.
              </li>
              <li>
                <b>FREELANCE PERMIT</b> – for people with expertise who want to
                work from themselves with the comfort of their own place and
                timings.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-justify mx-auto">
            <h6>ENTITIES:</h6>
            <p>
              Another major point before applying for a license is to select the
              perfect Entity depending upon your business needs. The choice of
              jurisdictions for company formation are as follows:
            </p>
            <ul>
              <li>
                <b>MAINLAND</b> – referred to as ―Local Companies with either a
                local sponsor or local agent.
              </li>
              <li>
                <b>FREEZONES</b> – allow 100% foreign ownership and turnkey
                solutions for new and established businesses
              </li>
              <li>
                <b>OFFSHORE</b> – associated as low operating costs and swift
                formation times
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-justify mx-auto">
            <h6>REGIONS:</h6>
            <p>
              There are 7 Emirates and more than 20 established free zones where
              companies can register and operate from. Each Emirate and free
              zone have varying laws and regulations some of which are:
            </p>
            <ul>
              <li>100% Foreign Ownership.</li>
              <li>100% Tax Free Status.</li>
              <li>Business Friendly Environment.</li>
              <li>International Banking.</li>
              <li>Flexibility in Office Space and Cost.</li>
            </ul>
          </div>
        </div>
      </div>
      <VissionAboutCommon
        title="Management"
        heading="We at Pozitive Approach provide creative, innovative and cost-effective solutions through
our Management Services which help businesses achieve constant progress and success.
Our Management Services include:"
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-justify mx-auto"></div>
          <ul>
            <li>Opening of bank accounts</li>
            <li>Staffing</li>
            <li>Recruiting</li>
            <li>Operation of Bank accounts</li>
            <li>SME & Personal Loans</li>
            <li>Credit Cards</li>
            <li>Internet and Social Media Marketing Management</li>
            <li>Tourist & Visit Visa</li>
          </ul>
        </div>
      </div>
      <VissionAboutCommon
        title="PRO SERVICES"
        heading="To set up a company in UAE it requires a lot of procedures, approvals, attestations, etc. An
        experienced PRO is required to not only guide you properly but also to complete all your paperwork
        and formalities on your behalf. We at Pozitive Approach are here to do just that for you. Let us
        provide you with total peace of mind, so you may focus on your core business. Our PRO Services Includes:"
      />
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-md-12 text-justify mx-auto">
            <ul>
              <li>Local Sponsor / Agent</li>
              <li>Renewal of trade license</li>
              <li>Company immigration card renewal</li>
              <li>Company labour card renewals & Updates</li>
              <li>Employment & residency visa processing Or Cancellation</li>
              <li>Labour quota applications & Modifications</li>
              <li>Labour contracts New & Changes</li>
              <li>Offer letters</li>
              <li>New emirates ID processing & Renewal</li>
              <li>WPS support services</li>
              <li>Labour and immigration support services</li>
              <li>Document Clearing</li>
              <li>Certificates Attestations</li>
              <li>Legal Translations</li>
            </ul>
            <img
              className="mt-5"
              style={{ width: "100%" }}
              src={require("../../Images/business-steps.jpg")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessSetup;
