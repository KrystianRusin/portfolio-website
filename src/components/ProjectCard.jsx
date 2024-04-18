import React from "react";
import "../styles/ProjectCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

const ProjectCard = ({
  projectTitle,
  projectImg,
  projectDesc,
  repoLink,
  projectLink,
  imgPosition,
}) => {
  return (
    <div className={`project-card`}>
      <div className="project-card-main-content">
        <img src={projectImg} alt="project" className="project-img" />
        <div className="desc-container">
          <h3>{projectTitle}</h3>
          <p>{projectDesc}</p>
          <div className="project-links">
            {repoLink ? (
              <a href={repoLink} target="_blank" rel="noreferrer">
                <button className="project-button">
                  <GitHubIcon />
                </button>
              </a>
            ) : (
              <button className="project-button no-hover" disabled>
                <GitHubIcon />
              </button>
            )}
            {projectLink ? (
              <a href={projectLink} target="_blank" rel="noreferrer">
                <button className="project-button">
                  <WebIcon />
                </button>
              </a>
            ) : (
              <button className="project-button no-hover" disabled>
                <WebIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
