import React from "react";

import Skill from "./Skill";
import "../styles/SkillCard.css";

const SkillCard = ({ skillsArray, title }) => {
  return (
    <div className="skills-card">
      <h3 className="skill-header">{title}</h3>
      {skillsArray.map((skill, index) => {
        return (
          <Skill key={index} SkillIcon={skill.icon} SkillLevel={skill.level} />
        );
      })}
    </div>
  );
};

export default SkillCard;
