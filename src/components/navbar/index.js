// import { FaGithub, FaDiscord } from "react-icons/fa";
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
        <div className="components">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="seperator" />
    </div>
  );
};
export default Navbar;

/* <div className="flex">
            <FaGithub />
            <FaDiscord className="mx-3" />
          </div> */
