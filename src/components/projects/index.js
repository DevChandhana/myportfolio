import React from "react";
// styles
import "./index.scss";
// dummydata
import { projects } from "./data/index";
const Projects = () => {
  return (
    <div className="box">
      {projects.map((item) => (
        <div className="projBox" key={item.id}></div>
      ))}
    </div>
  );
};
export default Projects;
