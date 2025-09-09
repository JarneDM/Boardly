import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db.js";

function TaskCards({ status }) {
  const tasks = useLiveQuery(() => db.tasks.where("status").equals(status).toArray(), [status]);

  if (!tasks) return <p>Loading...</p>;

  return (
    <div className="space-y-2 w-full">
      {tasks.map((task) => (
        <div key={task.id} className="p-2 bg-white shadow rounded border">
          <h4 className="font-semibold">{task.title}</h4>
          <p>{task.description.length < 20 ? task.description : `${task.description.slice(0, 20)}...`}</p>
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
      ))}
    </div>
  );
}

export default TaskCards;
