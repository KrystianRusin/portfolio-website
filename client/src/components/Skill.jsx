import React from "react";
import "../styles/Skill.css";

const Skill = ({ SkillIcon, SkillLevel }) => {
  return (
    <div className="skill-container">
      <img src={SkillIcon} alt="skill" className="skill-img" />
      <div className="skill-bar">
        <div className="skill-level" style={{ width: `${SkillLevel * 20}%` }} />
      </div>
    </div>
  );
};

export default Skill;
