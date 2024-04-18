import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import objectNova from "../assets/objectNova.png";
import sadImg from "../assets/SAD.png";
import waldoImg from "../assets/where-waldo.png";
import igImg from "../assets/igImg.png";
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
          projectTitle={"ObjectNova Landing Page"}
          projectImg={objectNova}
          projectDesc={
            "A Company landing page for the startup company ObjectNova Inc. Website was created using React, and Express."
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
        <ProjectCard
          projectTitle={"Where's Waldo"}
          projectImg={waldoImg}
          projectDesc={
            "A web based implementation of the popular game Where's Waldo. The game uses ReactJS for the front end and Express JS for the backend API with a MongoDB database to store the scores."
          }
          repoLink={"https://github.com/KrystianRusin/where-s-waldo"}
          projectLink={"https://velvety-vacherin-2285c7.netlify.app"}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
