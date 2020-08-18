import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Pages/Contact";
import ServicePage from "./Pages/Services";
import About from "./Pages/About";
import Accounting from "./Pages/Accounting";
import Decor from "./Pages/Decor";
import RealEstate from "./Pages/RealEstate";
import BusinessSetup from "./Pages/BusinessSetup";
import ITServices from "./Pages/ITServices";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services/accounting" component={Accounting} />
        <Route exact path="/services/decor" component={Decor} />
        <Route exact path="/services/realestate" component={RealEstate} />
        <Route exact path="/services/business" component={BusinessSetup} />
        <Route exact path="/services/it" component={ITServices} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
