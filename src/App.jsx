import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Blackhole from "./components/Blackhole";
import About from "./components/About";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Analytics } from "@vercel/analytics/react";
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
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id="main" className="content-container">
      <Analytics />
      <Blackhole />
      <Nav className="nav" openModal={handleOpenModal} />
      <div className="main-content" id="main-content">
        {showModal && <ContactModal onClose={handleCloseModal} />}
        <div className="center-content">
          {" "}
          <motion.div>
            <div className="intro-content">
              <Intro />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className="skills-motion">
        <div id="skills" className="skills">
          <Skills />
        </div>
      </motion.div>
      <motion.div>
        <div id="projects" className="projects ">
          <Projects />
        </div>
      </motion.div>
      <div className="canvas">
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 0, 200], fov: 75 }}
        >
          <Stars />
          <CameraController />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
