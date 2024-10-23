import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import objectNova from "../assets/objectNova.png";
import sadImg from "../assets/SAD.png";
import waldoImg from "../assets/where-waldo.png";
import igImg from "../assets/igImg.png";
import stsImg from "../assets/stsImg.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        variants={imageVariants}
        className="projects-container"
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
      >
        <ProjectCard
          projectTitle={"Slay The Spire AI"}
          projectImg={stsImg}
          projectDesc={
            "A project that uses machine learning to play the popular game Slay The Spire. The project uses a Maskable PPO algorithm to train the AI to play the game. Made with OpenAI Gym and Pytorch."
          }
          repoLink={"https://github.com/KrystianRusin/Slay-The-Spire-RL"}
          projectLink={""}
        />
        <ProjectCard
          projectTitle={"ObjectNova Landing Page"}
          projectImg={objectNova}
          projectDesc={
            "A Company landing page for the startup company ObjectNova Inc. The site features a modern design and responsive layout and was created using React, and Express"
          }
          projectLink={"https://objectnova.ca"}
        />
        <ProjectCard
          projectTitle={"Instagram Clone"}
          projectImg={igImg}
          projectDesc={
            "A recreation of instagram using ReactJs for the front-end, ExpressJs and Mongodb for backend and database, and firebase for image storage"
          }
          repoLink={"https://github.com/KrystianRusin/instagram-clone"}
          projectLink={"https://www.krystianigclone.com"}
        />
        <ProjectCard
          projectTitle={"Suspicious Activity Detection"}
          projectImg={sadImg}
          projectDesc={
            "A project that uses machine learning to detect suspicious activity in a given video. The project uses OpenCV to process the video and then uses the YOLOv8 model to detect suspicious activity."
          }
          repoLink={"https://github.com/kavanc/CAPSTONE2022-2023"}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
