import { Fragment } from "react";
import "./App.css";
//components
import Navbar from "./components/navbar/index";
import Banner from "./components/banner/index";
function App() {
  return (
    <Fragment className="">
      <div className=" flex justify-center">
        <Navbar />
      </div>
      <Banner />
    </Fragment>
  );
}

export default App;
