import React from "react";
import TaskCards from "./TaskCards";

const statusClasses = {
  Todo: "todo",
  "In Progress": "in-progress",
  Testing: "testing",
  Done: "done",
};

function Status({ status }) {
  return (
    <div className="mx-5 p-2 h-auto rounded-md min-h-[200px] flex flex-col items-center">
      <h3 className={`font-bold mb-2 px-3 py-1 rounded-xl w-full flex justify-center ${statusClasses[status]}`}>{status}</h3>
      <TaskCards status={status} />
    </div>
  );
}

export default Status;
