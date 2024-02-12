import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Socials from "./components/Socials";
import About from "./components/About";
import Starfield from "react-starfield";
import SkillsCarousel from "./components/skillsSlider";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactModal from "./components/ContactModal";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useState, useEffect } from "react";

//TODO: VIEW MY RESUME BUTTON

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true,
  });

  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
  });

  const [refProjects, inViewProjects] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div id="main" className="content-container">
      <Starfield
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        numParticles={200}
        speed={0.01}
      />
      <Nav className="nav" openModal={handleOpenModal} />
      <div className="main-content">
        {showModal && <ContactModal onClose={handleCloseModal} />}
        <div className="center-content">
          <div className="intro-content">
            <Socials />
            <Intro />
          </div>
          <SkillsCarousel />
        </div>
      </div>
      <motion.div
        ref={refAbout}
        variants={variants}
        initial="hidden"
        animate={inViewAbout ? "show" : "hidden"}
      >
        <div id="about" className="about">
          <About />
        </div>
      </motion.div>
      <motion.div
        ref={refSkills}
        variants={variants}
        initial="hidden"
        animate={inViewSkills ? "show" : "hidden"}
      >
        <div id="skills" className="skills-container">
          <Skills />
        </div>
      </motion.div>
      <motion.div
        ref={refProjects}
        variants={variants}
        initial="hidden"
        animate={inViewProjects ? "show" : "hidden"}
      >
        <div id="projects" className="projects-container">
          <Projects />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
