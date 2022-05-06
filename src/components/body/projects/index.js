import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <label
            className="project-title"
            style={{ color: "darkblue", fontSize: "25px" }}
          >
            More Cooking.....
          </label>
        </div>
      </div>
    </div>
  );
}

export default Projects;
