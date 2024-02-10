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

import { useState, useEffect } from "react";

//TODO: BACKEND
//TODO: ADD SAD PROJECT

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      <div id="about" className="about">
        <About />
      </div>
      <div id="skills" className="skills-container">
        <Skills />
      </div>
      <div id="projects" className="projects-container">
        <Projects />
      </div>
    </div>
  );
}

export default App;
