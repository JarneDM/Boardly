import React from "react";
import TaskCards from "./TaskCards";
import AddTask from "./AddTask";
import { Droppable } from "@hello-pangea/dnd";

const statusClasses = {
  Backlog: "backlog",
  Todo: "todo",
  "In Progress": "in-progress",
  Testing: "testing",
  Done: "done",
};

function Status({ status, selectedProject, search }) {

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`mx-5 p-2 min-h-[80vh] rounded-lg shadow-lg flex flex-col items-center overflow-y-auto no-scrollbar ${statusClasses[status]}`}
        >
          <h3
            className={`font-bold mb-2 px-3 py-1 rounded-xl w-full flex justify-center ${statusClasses[status]} dark:text-white`}
          >
            {status}
          </h3>

          <TaskCards
            statusClasses={statusClasses[status]}
            status={status}
            selectedProject={selectedProject?.id}
            search={search}
          />

          {provided.placeholder}

          <AddTask statusClasses={statusClasses[status]} />
        </div>
      )}
    </Droppable>
  );
}

export default Status;
