import React from "react";

import Skill from "./Skill";
import "../styles/SkillCard.css";

const SkillCard = ({ skillsArray, title }) => {
  return (
    <div className="skills-card">
      <h2 className="skill-header">{title}</h2>
      {skillsArray.map((skill, index) => {
        return (
          <Skill key={index} SkillIcon={skill.icon} SkillLevel={skill.level} />
        );
      })}
    </div>
  );
};

export default SkillCard;
