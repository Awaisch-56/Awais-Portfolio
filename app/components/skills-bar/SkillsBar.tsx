import React from "react";
import { SkillBarProps } from "@/type/componentsTypes";

const skillLevels: SkillBarProps[] = [
  { name: "React.js", level: "80" },
  { name: "Next.js", level: "70" },
  { name: "React Native", level: "60" },
  { name: "TypeScript", level: "70" },
  { name: "JavaScript", level: "80" },
  { name: "Material UI", level: "80" },
  { name: "Bootstrap", level: "70" },
  { name: "CSS", level: "90" },
  { name: "HTML", level: "90" },
];

export const SkillsBar: React.FC = () => {
  return (
    <div className="skills-bar-container">
      {skillLevels.map((skill) => (
        <div key={skill.name} className="skill-item">
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}%</span>
          </div>
          <div className="skill-bar-background">
            <div
              className="skill-bar-fill"
              style={{ width: `${skill.level}% ` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBar;
