import React, { useState } from "react";
import AllProjects from "./allProjects";
import BestProjects from "./bestProjects";
import "../css/project-list.css";

export default function ProjectList() {
  const [state, setState] = useState("project");
  return (
    <section
      className="project-list-container"
      aria-label="project-list"
      id="projects"
    >
      <div className="wrapper">
        <div>
          <h2 className="project-list-title">Parece magia, funciona con código</h2>
          <div>
          <h3 className="project-list-subtitle">A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles. </h3>
          {state === "project" ? (
            <BestProjects setState={setState} />
          ) : (
            <AllProjects setState={setState} />
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
