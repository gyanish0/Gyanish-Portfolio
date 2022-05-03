import React from "react";
import "./skill-card.css";
function SkillCard({ skill, i }) {
  return (
    <div className="skill-card" key={i}>
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
