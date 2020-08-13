import React from "react";
import "./style.css";

const ClientTrust = () => {
  return (
    <>
      <div className="container mb-5 mt-5 pt-5 pb-5">
        <div className="row ">
          <div className="col-md-6 client-img"></div>
          <div className="col-md-6 client-trust">
            <h1 className="client-trust-heading ml-4 mt-5">
              We are more trusted then 500 clients
            </h1>
            <p className="ml-4 mt-4">
              Without your customers, you would not exist. Your business would
              not flourish, and regardless of the product or service you
              provide, it would become null and void. You run a business
              primarily to help people or offer them something you believe in;
              you also run a business so you can turn a profit
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientTrust;
