import React from "react";
import { Fragment } from "react";
import "./App.css";
// components
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <Fragment>
      <div className="md:fixed md:flex hidden">
        <Navbar />
      </div>
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
