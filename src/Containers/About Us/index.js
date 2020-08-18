import React from "react";
import "./style.css";
import ExpertiseColumn from "../../Components/ExpertiseColumn";
import ClientTrust from "../ClientTrust";
import VissionAboutCommon from "../VissionAboutCommon";

const AboutUs = () => {
  return (
    <>
      <VissionAboutCommon
        title="About us"
        heading="Pozitive Approach is an aspiring business solutions service
              provider with a glorious and successful presence in the Global
              market with wide range of products and services related to
              business setups and management solutions to make it run smoothly
              and efficiently."
      >
        <div className="row mt-4 mb-5">
          <ExpertiseColumn
            title="COMPETENCE"
            detail="100% Pozitive Approach is made up of experienced and Certified Professionals with
            different and outstanding skills in all kinds of sectors."
          />
          <ExpertiseColumn
            title="OUR EXPERTISE"
            detail="We consult, build, design and automate business processes to increase
          productivity through diverse technologies. We start with a company
          formation to acquiring a work space; doing its décor to designing and
          uploading its website; from Accounting, bookkeeping to finalizing and
          submission of VAT. We are always good in what we do and we remain the
          best."
          />
          <ExpertiseColumn
            title="WHAT WE BELIEVE"
            detail="We believe in providing best, in-time, efficient and cost-effective services. Pozitive Approach
            is your ultimate destination for an outstanding business set up and development service."
          />
        </div>
      </VissionAboutCommon>
      <VissionAboutCommon
        title="Our Vission"
        heading="We don’t just help a business, we believe in its success. We help
     BUILD businesses both big and small and our clients are at the
     heart of everything we do."
        paragraph="It is our vision to provide our clients with the finest and most
     elite Business Consultancy and amenities from start to finish and
     it is our desire to continue to support them even once our
     transactions are complete. Our aim is to assist and support our
     client with their individual needs and requests, whether it be
     related to Business Set up, Website/IT services, Financial
     Assistance like Accounting, bookkeeping, VAT services as well as
     in the fields of real estate and Décor. We provide a team of
     professional experts who deliver outstanding customer service and
     who are committed to gaining your trust along the way. Our valued
     partners and suppliers play a valuable role in our business
     development and will work side by side with us to enhance our
     productivity and end results."
      />
      <ClientTrust
        title="Our Team"
        detail="Pozitive Approach is the name of a collection of individuals who
              believe in excellence. We specialize in hiring people who have the
              drive to succeed and the will to implement the discipline required
              to succeed. We focus on nurturing our team and providing our team
              an environment that is conductive to creative thought. We focus on
              eliminating stress and pressure so our team can think clearly and
              creatively."
      />
    </>
  );
};
export default AboutUs;
