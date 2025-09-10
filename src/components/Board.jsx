import React from "react";
import Status from "./Status";

function Board({ selectedProject }) {
  const statuses = ["Todo", "In Progress", "Testing", "Done"];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {statuses.map((status) => (
        <Status key={status} status={status} selectedProject={selectedProject} />
      ))}
    </div>
  );
}

export default Board;
