import React from "react";
import Button from "./helpers/button";
import "./index.scss";
import Dev from "../../assets/dev.jpg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="heading">
        <h2 className="head_1">Hey there, it's</h2>
        <h1 className="name">Chandhana Reddy</h1>
        <p className="desc">Multi-Platform Application Developer</p>
      </div>
      <div className="w-screen flex justify-center mt-4 ">
        <Button value="Download Resume" fill={"fill"} />
        <Button value="Let's Talk" />
      </div>
      <div className="w-screen flex  justify-center">
        <img src={Dev} alt="developer" className="devImg" />
      </div>
    </div>
  );
};
export default Banner;
