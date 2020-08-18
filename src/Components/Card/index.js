import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <>
      <div
        className="card col-md-4 col-10 mx-auto pt-4 pb-4"
        style={{
          color: props.color,
          marginTop: props.cardMargin,
          backgroundColor: props.bgColor,
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "goldenrod" }}>
          {props.pkgName}
        </h2>
        {props.children}
        <h4 className="text-center mt-4" style={{ color: "goldenrod" }}>
          AED {props.price} Per Month
        </h4>
      </div>
    </>
  );
};
export default Card;
