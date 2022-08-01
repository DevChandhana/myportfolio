import React from "react";
import { Fragment } from "react";
import "./App.css";
// components
import Home from "./components/home";
import Navbar from "./components/navbar";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
