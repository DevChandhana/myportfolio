import { AiFillHome, AiFillFileText, AiFillMail } from "react-icons/ai";
import { FaUserNinja, FaHeart } from "react-icons/fa";
// import { MdWork } from "react-icons/md";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="Container">
      <AiFillHome size={"1.7em"} title="Home" />
      <FaUserNinja size={"1.7em"} title="About" />
      <AiFillFileText size={"1.7em"} title="Projects" />
      <FaHeart size={"1.7em"} title="Interests" />
      <AiFillMail size={"1.7em"} title="Contact" />
    </div>
  );
};
export default Navbar;
