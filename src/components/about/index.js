import Abut from "../../assets/about.png";
import React from "react";
const About = () => {
  return (
    <div className="w-screen flex flex-row my-10">
      <div className="abosulte -z-10 md:relative w-[50%]">
        <img src={Abut} alt="About me" className="object-contain h-2/4" />
      </div>
      <div className="w-[50%]">Im a dev</div>
    </div>
  );
};
export default About;
