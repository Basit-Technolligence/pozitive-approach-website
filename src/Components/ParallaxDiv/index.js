import React from "react";
import "./style.css";
import { Parallax } from "react-parallax";

const ParallaxDiv = (props) => {
  return (
    <Parallax
      bgImage={require("../../Images/" + props.image + ".jpg")}
      strength={200}
      bgImageStyle={{ maxWidth: "100%" }}
    >
      <div style={{ height: "500px" }}>
        <div className="textContainer text-center pl-5 pr-5">
          <h1>{props.heading}</h1>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxDiv;
