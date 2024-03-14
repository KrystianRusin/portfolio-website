import { Typewriter } from "react-simple-typewriter";
import meImage from "../assets/me.jpg";
import "../styles/Intro.css";

const Intro = () => {
  const roles = [
    "A Full Stack Engineer",
    " An A.I Enthusiast",
    "A Life Long Learner",
  ];

  return (
    <div className="intro-container">
      <div className="intro-text-container">
        <h2>
          Hi, My name is
          <br />
          <span className="name-title">Krystian Rusin</span>
        </h2>
        <h3>
          I&apos;m {"{  "}
          <span>
            <Typewriter
              className="typewriter"
              words={roles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={75}
              delaySpeed={1000}
            />
          </span>
          {" }"}
        </h3>
        <p className="intro-info">
          Based out of Toronto, Ontario with experience in web development, and
          software development. I am working for ObjectNova Inc. as a Full Stack
          Engineer.
        </p>
        <a className="download-a" href="/resume.pdf" target="_blank">
          <button className="download-btn">View my Resume!</button>
        </a>
      </div>
      <img src={meImage} alt="PLACEHOLDER" className="me-img" />
    </div>
  );
};

export default Intro;
