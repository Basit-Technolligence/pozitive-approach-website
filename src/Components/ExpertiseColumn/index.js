import React from "react";
import "./style.css";

const ExpertiseColumn = (props) => {
  return (
    <>
      <div className="col-md-4 text-center">
        <h5 className="h5-heading">{props.title}</h5>
        <p className="text-justify font-weight-light">{props.detail}</p>
      </div>
    </>
  );
};
export default ExpertiseColumn;
