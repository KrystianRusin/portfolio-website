import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Blackhole from "./components/Blackhole";
import About from "./components/About";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Stars from "./components/three/Stars";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactModal from "./components/ContactModal";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useState, useEffect } from "react";

const CameraController = () => {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    const radius = 500;
    camera.position.x = radius * Math.sin(clock.getElapsedTime() * 0.05);
    camera.position.z = radius * Math.cos(clock.getElapsedTime() * 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
};

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            document
              .querySelector(`.nav-routes a[href="#${id}"]`)
              .classList.add("active");
          } else {
            document
              .querySelector(`.nav-routes a[href="#${id}"]`)
              .classList.remove("active");
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(document.querySelector("#about"));
    observer.observe(document.querySelector("#skills"));
    observer.observe(document.querySelector("#projects"));

    return () => {
      observer.disconnect();
    };
  }, []);

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
      <Blackhole />
      <Nav className="nav" openModal={handleOpenModal} />
      <div className="main-content" id="main-content">
        {showModal && <ContactModal onClose={handleCloseModal} />}
        <div className="center-content">
          <div className="intro-content">
            <Intro />
          </div>
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
        <div id="skills" className="skills">
          <Skills />
        </div>
      </motion.div>
      <motion.div
        ref={refProjects}
        variants={variants}
        initial="hidden"
        animate={inViewProjects ? "show" : "hidden"}
      >
        <div id="projects" className="projects ">
          <Projects />
        </div>
      </motion.div>
      <div className="canvas">
        <Canvas camera={{ position: [0, 0, 200], fov: 75 }}>
          <Stars />
          <CameraController />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
