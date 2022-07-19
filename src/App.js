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
      <h1 className="text-white h-screen bg-slate-500">hello</h1>
      <Banner />
    </Fragment>
  );
}

export default App;
