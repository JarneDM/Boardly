import React from "react";
import TaskCards from "./TaskCards";

const statusClasses = {
  Todo: "todo",
  "In Progress": "in-progress",
  Testing: "testing",
  Done: "done",
};

function Status({ status, selectedProject, search }) {
  return (
    <div
      className={`mx-5 p-2 min-h-[80vh] rounded-lg shadow-lg flex flex-col items-center overflow-y-auto no-scrollbar ${statusClasses[status]}`}
    >
      <h3 className={`font-bold mb-2 px-3 py-1 rounded-xl w-full flex justify-center ${statusClasses[status]}`}>{status}</h3>
      <TaskCards status={status} selectedProject={selectedProject?.id} search={search} />
    </div>
  );
}

export default Status;
