import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
