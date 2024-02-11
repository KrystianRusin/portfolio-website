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
            learning and building applications. I&apos;m a recent graduate of
            the Software Engineering and management program at Ontario Tech
            University. I&apos;m also passionate about AI and machine learning
            and am constantly seeking opportunities to learn and grow in the
            field.
          </p>
          <p>
            I started my journey in tech by developing small mods for the
            popular gamed called Minecraft in Java and have since then expanded
            my skills to web development, mobile development and AI. In my free
            time I enjoy the outdoors, playing video games and learning new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
