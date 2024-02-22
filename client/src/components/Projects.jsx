import React from "react";

import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import objectNova from "../assets/objectNova.png";
import storeImg from "../assets/store.png";
import cvCreatorImg from "../assets/cvCreator.png";
import sadImg from "../assets/SAD.png";
import waldoImg from "../assets/where-waldo.png";

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <ProjectCard
          projectTitle={"ObjectNova Landing Page"}
          projectImg={objectNova}
          projectDesc={
            "A Company landing page for the startup company ObjectNova Inc. Website was created using React, and Express."
          }
          projectLink={"https://objectnova.ca"}
        />
        <ProjectCard
          projectTitle={"Demo Store"}
          projectImg={storeImg}
          projectDesc={
            "A Demo clothing store built using ReactJS and TailwindCSS and gathers fake store items from FakeStoreAPI to populate products."
          }
          repoLink={"https://github.com/KrystianRusin/shopping-cart"}
          projectLink={"https://krystianrusin.github.io/shopping-cart/"}
        />
        <ProjectCard
          projectTitle={"CV Creator"}
          projectImg={cvCreatorImg}
          projectDesc={
            "A CV creator built using ReactJS that allows users to input, skills education and work experience and then creates a resume that can be dowloaded as a PDF. Built Using React"
          }
          repoLink={"https://github.com/KrystianRusin/cv-creator"}
          projectLink={"https://krystianrusin.github.io/cv-creator/"}
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
      </div>
    </div>
  );
};

export default Projects;
