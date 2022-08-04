import React from "react";
// styles
import "./index.scss";
// dummydata
import { projects } from "./data/index";
const Projects = () => {
  return (
    <div className="w-screen ">
      <h1 className="heading">My Projects</h1>
      <div className="box">
        {projects.map((item) => (
          <div className="projBox" key={item.id}>
            {/* eslint-disable-next-line */}
            <img src={item.image} alt="dummy image" className="projImg" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
