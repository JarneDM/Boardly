import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db.js";

function Projects() {
  const projects = useLiveQuery(() => db.projects.toArray(), []);

  return (
    <div>
      <select name="projects" id="projects" className="border p-2 rounded w-full">
        {projects?.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Projects;
