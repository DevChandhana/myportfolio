import { AiFillHome, AiFillFileText, AiFillMail } from "react-icons/ai";
import { FaUserNinja, FaHeart } from "react-icons/fa";
// import { MdWork } from "react-icons/md";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="Container">
      <AiFillHome size={"1.7em"} title="Home" color="white" />
      <FaUserNinja size={"1.7em"} title="About" color="white" />
      <AiFillFileText size={"1.7em"} title="Projects" color="white" />
      <FaHeart size={"1.7em"} title="Interests" color="white" />
      <AiFillMail size={"1.7em"} title="Contact" color="white" />
    </div>
  );
};
export default Navbar;
