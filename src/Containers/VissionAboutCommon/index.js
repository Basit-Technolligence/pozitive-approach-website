import React from "react";
import "./style.css";

const VissionAboutCommon = (props) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <span className="line mr-3 align-self-center"></span>
            <h4>{props.title}</h4>
            <span className="line ml-3 align-self-center"></span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-10 mx-auto mt-4 text-center">
            <h6 style={{ letterSpacing: "0.8px" }}>{props.heading}</h6>
            <p className="font-weight-light">{props.paragraph}</p>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
};
export default VissionAboutCommon;
