import React from "react";
import "./style.css";

const ClientTrust = (props) => {
  return (
    <>
      <div className="container mb-5 mt-5 pt-5 pb-5">
        <div className="row ">
          <div className="col-md-6 client-img"></div>
          <div className="col-md-6 client-trust">
            <h1 className="client-trust-heading ml-4 mt-5">{props.title}</h1>
            <p className="ml-4 mt-4">{props.detail}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientTrust;
