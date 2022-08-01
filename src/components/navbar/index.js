import { FaGithub, FaDiscord } from "react-icons/fa";
import "./index.scss";
const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <img
          src={require("../../assets/CN.svg").default}
          alt="mySvgImage"
          className="svg"
        />

        {/* <h1 className="name">Chandhana Reddy</h1> */}
        <div className="components">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
          <div className="flex">
            <FaGithub />
            <FaDiscord className="mx-1" />
          </div>
        </div>
      </div>
      <div className="seperator" />
    </div>
  );
};
export default Navbar;
