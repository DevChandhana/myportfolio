import "./index.scss";
import ProfilePic from "../../assets/image.jpeg";
const Home = () => {
  return (
    <div className="home">
      <div className="aboutBox">
        <h1 className="heading">I'm Chandhana Reddy</h1>
        <h3 className="desc">
          I'm a frontend developer who can build applications for both mobile
          and web platforms. I have 2.8 years of experience as a Frontend
          developer. Currently focusing on becoming a full-stack developer.
        </h3>
      </div>
      <div className="imageBox">
        <img src={ProfilePic} alt="profile pic" className="img" />
      </div>
    </div>
  );
};
export default Home;
