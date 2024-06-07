import { Typewriter } from "react-simple-typewriter";
import meImage from "../assets/mainIconsdark.svg";
import "../styles/Intro.css";
import { motion } from "framer-motion";

const Intro = () => {
  const roles = [
    "A Software Engineer",
    "An A.I Enthusiast",
    "A Life Long Learner",
  ];

  return (
    <div className="intro-container">
      <div className="intro-text-container">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
        >
          Hi, My name is
          <br />
          <span className="name-title">Krystian Rusin</span>
        </motion.h2>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
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
        </motion.h3>
        <motion.p
          className="intro-info"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.8 }}
        >
          Based out of Toronto, Ontario with experience in web development, and
          software development. I am working for ObjectNova Inc. as a Full Stack
          Engineer.
        </motion.p>
        <motion.a
          className="download-a"
          href="/resume.pdf"
          target="_blank"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.1 }}
        >
          <button className="download-btn">View my Resume!</button>
        </motion.a>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.5, delay: 1.1 }}
      >
        <img src={meImage} alt="PLACEHOLDER" className="me-img" />
      </motion.div>
    </div>
  );
};

export default Intro;
