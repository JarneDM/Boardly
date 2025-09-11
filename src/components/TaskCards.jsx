import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db.js";

function TaskCards({ status, selectedProject, search }) {
  const tasks = useLiveQuery(() => {
    if (!status) return [];

    if (!selectedProject) {
      // if no project is selected, show all tasks
      return db.tasks.where("status").equals(status).toArray();
    }

    // if a project is seletced, show tasks of status and project
    return db.tasks
      .where("[status+projectId]")
      .equals([status, String(selectedProject)])
      .toArray();
  }, [status, selectedProject]);

  if (!tasks) return <p>Loading...</p>;

  const q = (search || "").toLowerCase().trim();
  const filtered = q
    ? tasks.filter((t) => {
        const hay =
          `${t.title ?? ""} ${t.description ?? ""} ${(t.labels ?? []).join(" ")}`.toLowerCase();
        return hay.includes(q);
      })
    : tasks;

  return (
    <div className="space-y-2 w-full">
      {filtered.length === 0 ? (
        <p>No tasks</p>
      ) : (
        filtered.map((task) => (
          <div key={task.id} className="p-2 bg-white shadow rounded border">
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
                {task.labels.map((l, i) => (
                  <span key={i} className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                    {l}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TaskCards;
