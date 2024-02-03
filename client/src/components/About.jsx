import "../styles/About.css";
import AboutImage from "../assets/about-me.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-header">About</h2>
      <div className="about-content-container">
        <img src={AboutImage} alt="" />
        <div className="about-content">
          <p>
            I am a full stack engineer at ObjectNova Inc. with a passion for
            learning and building applications.a recent graduate of the Software
            Engineering and management program at Ontario Tech University.
            I&apos;m also passionate about AI and machine learning and am
            constantly seeking opportunities to learn and grow in the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
