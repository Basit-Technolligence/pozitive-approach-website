import React, { useEffect } from "react";
import "./style.css";
import VissionAboutCommon from "../../Containers/VissionAboutCommon";
import Header from "../../Containers/Header";
import ParallaxDiv from "../../Components/ParallaxDiv";
import Footer from "../../Containers/Footer";
import Card from "../../Components/Card";

const ITServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <ParallaxDiv heading="IT SERVICES" image="it" />
      <VissionAboutCommon title="Website Development" />
      <div className="container" style={{ marginBottom: "150px" }}>
        <div className="row">
          <Card
            pkgName="Basic Package"
            price="Starts from AED 170"
            color="#000"
            cardMargin="5%"
            bgColor="#fff"
          >
            <h5>1-5 Pages Static Website</h5>
            <ul>
              <li>No Database</li>
              <li>No Backend</li>
              <li>Only Frontend</li>
              <li>Responsiveness</li>
            </ul>
          </Card>
          <Card
            pkgName="Premium Package"
            price="Starts from AED 660"
            color="#fff"
            cardMargin="3%"
            bgColor="#002d5b"
          >
            <h5>Full Fledged Website</h5>
            <ul>
              <li>High-end Functionality</li>
              <li>Testing</li>
              <li>Quality Assurance</li>
              <li>Database Include</li>
              <li>Backend Include</li>
              <li>Frontend Include</li>
              <li>Responsiveness</li>
            </ul>
          </Card>
          <Card
            pkgName="Standard Package"
            price="Starts from AED 500"
            color="#000"
            cardMargin="5%"
            bgColor="#fff"
          >
            <h5>4-5 Pages Dynamic Website</h5>
            <ul>
              <li>Database Include</li>
              <li>Backend Include</li>
              <li>Frontend Include</li>
              <li>Testing Include</li>
              <li>Responsiveness</li>
            </ul>
          </Card>
        </div>
      </div>
      <VissionAboutCommon title="Android App Development" />
      <div className="container" style={{ marginBottom: "150px" }}>
        <div className="row">
          <Card
            pkgName="Basic Package"
            price="Starts from AED 440"
            color="#000"
            cardMargin="5%"
            bgColor="#fff"
          >
            <h5>8-10 Activities Static Application</h5>
            <ul>
              <li>No Database</li>
              <li>Responsiveness</li>
              <li>No Backend</li>
              <li>Only Frontend</li>
            </ul>
          </Card>
          <Card
            pkgName="Premium Package"
            price="Starts from AED 1200"
            color="#fff"
            cardMargin="3%"
            bgColor="#002d5b"
          >
            <h5>Full Fledged App For Business</h5>
            <ul>
              <li>High-end Functionality</li>
              <li>Testing</li>
              <li>Responsiveness</li>
              <li>Quality Assurance</li>
              <li>Database Include</li>
              <li>Backend Include</li>
              <li>Frontend Include</li>
            </ul>
          </Card>
          <Card
            pkgName="Standard Package"
            price="Starts from AED 800"
            color="#000"
            cardMargin="5%"
            bgColor="#fff"
          >
            <h5>8-12 Acitivities Dynamic Application</h5>
            <ul>
              <li>Database Include</li>
              <li>Backend Include</li>
              <li>Frontend Include</li>
              <li>Testing Include</li>
              <li>Responsiveness</li>
            </ul>
          </Card>
        </div>
      </div>
      <VissionAboutCommon title="Logo Desgining" />
      <div className="container" style={{ marginBottom: "150px" }}>
        <div className="row">
          <Card
            pkgName="Basic Package"
            price="Starts from AED 130"
            color="#000"
            cardMargin="5%"
            bgColor="#fff"
          >
            <h5>This package include:</h5>
            <ul>
              <li>2 Samples</li>
              <li>2 Revisions</li>
              <li>Adobe File</li>
              <li>PNG File</li>
            </ul>
          </Card>
          <Card
            pkgName="Premium Package"
            price="Starts from AED 270"
            color="#fff"
            cardMargin="3%"
            bgColor="#002d5b"
          >
            <h5>This package include:</h5>
            <ul>
              <li>4 Samples</li>
              <li>4 Revisions</li>
              <li>Adobe File</li>
              <li>PNG File</li>
            </ul>
          </Card>
          <Card
            pkgName="Standard Package"
            price="Starts from AED 190"
            color="#000"
            cardMargin="5%"
            bgColor="#fff"
          >
            <h5>This package include:</h5>
            <ul>
              <li>3 Samples</li>
              <li>3 Revisions</li>
              <li>Adobe File</li>
              <li>PNG File</li>
            </ul>
          </Card>
        </div>
        <p style={{ marginTop: "100px" }}>
          <b>Note:</b> All prices are not fixed these varies on user
          requirements.
        </p>
      </div>
      <Footer />
    </>
  );
};
export default ITServices;
