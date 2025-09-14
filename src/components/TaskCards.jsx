import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db.js";
import { Draggable } from "@hello-pangea/dnd";
import bin from "../assets/bin.png";

function TaskCards({ statusClasses, status, selectedProject, search }) {
  const tasks = useLiveQuery(() => {
    if (!status) return [];

    if (!selectedProject) {
      // if no project is selected, show all tasks
      return db.tasks.where("status").equals(status).toArray();
    }

    // if a project is selected, show tasks of status and project
    return db.tasks.where("[status+projectId]").equals([status, selectedProject]).toArray();
  }, [status, selectedProject]);

  const deleteTask = async (taskId) => {
    await db.tasks.delete(taskId);
    console.log(`Deleted task with Task ID: ${taskId}`);
  };

  if (!tasks) return <p>Loading...</p>;

  const q = (search || "").toLowerCase().trim();
  const filtered = q
    ? tasks.filter((t) => {
        const hay = `${t.title ?? ""} ${t.description ?? ""} ${(t.labels ?? []).map((l) => l.name).join(" ")}`.toLowerCase();
        return hay.includes(q);
      })
    : tasks;

  return (
    <div className="space-y-2 w-full">
      {filtered.length === 0 ? (
        <p className={`text-center bg-white rounded-lg ${statusClasses}`}></p>
      ) : (
        filtered.map((task, index) => (
          // console.log("Task data:", task),
          <Draggable key={task.id} draggableId={String(task.id)} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="relative p-2 bg-white shadow rounded border transition-colors dark:bg-[#03346E] dark:text-[#dbeafe]"
              >
                <h4 className="font-semibold">{task.title}</h4>
                <p>
                  {task.description
                    ? task.description.length < 20
                      ? task.description
                      : `${task.description.slice(0, 20)}...`
                    : "No description"}
                </p>
                {task.labels?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {task.labels.map((l, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                        {l.name}
                      </span>
                    ))}
                  </div>
                )}
                <button onClick={() => deleteTask(task.id)} className="absolute right-1 top-2">
                  <img className="h-[1rem]" src={bin} alt="delete task" />
                </button>
              </div>
            )}
          </Draggable>
        ))
      )}
    </div>
  );
}

export default TaskCards;
