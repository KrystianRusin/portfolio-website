import { Typewriter } from "react-simple-typewriter";
import meImage from "../assets/me.jpg";
import "../styles/Intro.css";

const Intro = () => {
  const roles = [
    "A Full Stack Developer",
    " An A.I Enthusiast",
    "A Life Long Learner",
  ];

  return (
    <div className="intro-container">
      <div className="intro-text-container">
        <h2>Hi, My name is</h2>
        <h2>Krystian Rusin</h2>
        <h3>
          I&apos;m {"{  "}
          <span>
            <Typewriter
              className="typewriter"
              words={roles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          {" }"}
        </h3>
        <button className="download-btn">Download my Resume!</button>
      </div>
      <img src={meImage} alt="PLACEHOLDER" className="me-img" />
    </div>
  );
};

export default Intro;
