import React from "react";
import Status from "./Status.jsx";
import { DragDropContext } from "@hello-pangea/dnd";
import { db } from "../../db.js";

function Board({ selectedProject, search }) {
  const statuses = ["Backlog", "Todo", "In Progress", "Testing", "Done"];

  const handleDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    await db.tasks.update(Number(draggableId), {
      status: destination.droppableId,
    });
    console.log(`Move task ${draggableId} from ${source.droppableId} to ${destination.droppableId}`);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-5 gap-4 p-4">
        {statuses.map((status) => (
          <Status key={status} status={status} selectedProject={selectedProject} search={search} />
        ))}
      </div>
    </DragDropContext>
  );
}

export default Board;
