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
            <a
              href={repoLink || "#"}
              target="_blank"
              rel="noreferrer"
              title={repoLink ? "" : "Repo link not available"}
            >
              <button
                className={`project-button ${repoLink ? "" : "no-hover"}`}
              >
                <GitHubIcon />
              </button>
            </a>
            <a
              href={projectLink || "#"}
              target="_blank"
              rel="noreferrer"
              title={projectLink ? "" : "Link not available"}
            >
              <button
                className={`project-button ${projectLink ? "" : "no-hover"}`}
              >
                <WebIcon />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
