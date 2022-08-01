import "./index.scss";
import ProfilePic from "../../assets/image.jpeg";
const Home = () => {
  return (
    <div className="home">
      <div className="aboutBox">About container</div>
      <div className="imageBox">
        <img src={ProfilePic} alt="profile pic" className="img" />
      </div>
    </div>
  );
};
export default Home;
