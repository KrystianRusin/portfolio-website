import ReactIcon from "../assets/react.svg";
import NodeIcon from "../assets/node.svg";
import MongoIcon from "../assets/mongo.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import MySqlIcon from "../assets/mysql.svg";

import PythonIcon from "../assets/python.svg";
import JavaIcon from "../assets/java.svg";
import CppIcon from "../assets/cpp.svg";
import GitIcon from "../assets/git.svg";
import TensorFlowIcon from "../assets/tensorflow.svg";

import JiraIcon from "../assets/jira.svg";
import ConfluenceIcon from "../assets/confluence.svg";
import LinuxIcon from "../assets/linux.svg";

import SkillCard from "./SkillCard";
import "../styles/Skills.css";

const FullStackSkills = [
  { icon: ReactIcon, level: 5 },
  { icon: NodeIcon, level: 4 },
  { icon: MongoIcon, level: 4 },
  { icon: MySqlIcon, level: 4 },
  { icon: TailwindIcon, level: 3 },
];

const SoftwareEngineeringSkillls = [
  { icon: PythonIcon, level: 5 },
  { icon: JavaIcon, level: 4 },
  { icon: CppIcon, level: 3 },
  { icon: GitIcon, level: 4 },
  { icon: TensorFlowIcon, level: 4 },
];

const MiscSkills = [
  { icon: JiraIcon, level: 4 },
  { icon: ConfluenceIcon, level: 4 },
  { icon: LinuxIcon, level: 4 },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-card-container">
        <SkillCard
          skillsArray={FullStackSkills}
          title="Full Stack Development"
        />
        <SkillCard
          skillsArray={SoftwareEngineeringSkillls}
          title="Software Development"
        />
        <SkillCard
          skillsArray={MiscSkills}
          title="Other Tools and Technology"
        />
      </div>
    </div>
  );
};

export default Skills;
