import React from "react";

import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import objectNova from "../assets/objectNova.png";
import storeImg from "../assets/store.png";
import cvCreatorImg from "../assets/cvCreator.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <ProjectCard
        projectTitle={"ObjectNova Landing Page"}
        projectImg={objectNova}
        projectDesc={
          "A Company landing page for the startup company ObjectNova Inc. The website is built using React, Express and Material-UI. The website is fully responsive and has a contact form that sends an email to the company's email address."
        }
        projectLink={"https://objectnova.ca"}
        imgPosition={"left"}
      />
      <ProjectCard
        projectTitle={"Demo Store"}
        projectImg={storeImg}
        projectDesc={
          "A Demo clothing store built using ReactJS and TailwindCSS and gathers fake store items from FakeStoreAPI to populate products."
        }
        repoLink={"https://github.com/KrystianRusin/shopping-cart"}
        projectLink={"https://krystianrusin.github.io/shopping-cart/"}
        imgPosition={"right"}
      />
      <ProjectCard
        projectTitle={"CV Creator"}
        projectImg={cvCreatorImg}
        projectDesc={
          "A CV creator built using ReactJS that allows users to input, skills education and work experience and then creates a resume that can be dowloaded as a PDF. Build Using React"
        }
        repoLink={"https://github.com/KrystianRusin/cv-creator"}
        projectLink={"https://krystianrusin.github.io/cv-creator/"}
      />
    </div>
  );
};

export default Projects;
