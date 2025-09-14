import React, { useState } from "react";
import { db } from "../db.js";
import { useLiveQuery } from "dexie-react-hooks";

function AddTask({ statusClasses }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState(null);
  const [status, setStatus] = useState("Todo");
  const [labels, setLabels] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const defaultLabels = ["Urgent", "Low Priority", "Bug", "Feature", "School", "Personal"];
  const defaultStatuses = ["Backlog", "Todo", "In Progress", "Testing", "Done"];

  const labelsArr = useLiveQuery(() => db.labels.toArray(), []);

  const projects = useLiveQuery(() => db.projects.toArray(), []);

  const handleAddTask = async () => {
    try {
      await db.tasks.add({
        title,
        description,
        status,
        labels,
        projectId,
        createdAt: new Date(),
      });

      setTitle("");
      setDescription("");
      setProjectId(null);
      setStatus("Todo");
      setLabels([]);
      setShowOverlay(false);
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowOverlay(true)}
        className={`cursor-pointer w-full mt-4 p-1 ${statusClasses} dark:bg-blue-900 dark:text-white shadow-md border-[1px] border-blue-600 text-blue-800 rounded-md hover:bg-white hover:text-blue-700 hover:p-0.5 hover:text-lg transition-colors`}
      >
        +
      </button>

      {showOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="space-y-2 bg-white p-6 rounded-md shadow-md w-96 relative">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              className="border p-2 rounded w-full"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="border p-2 rounded w-full"
            />

            <select onChange={(e) => setProjectId(e.target.value)} name="projects" id="projects">
              <option value="select-project">Select a project</option>
              {projects.map((project) => (
                <option value={project.id} key={project.id}>
                  {project.name}
                </option>
              ))}
            </select>

            <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded w-full">
              {defaultStatuses.map((status, idx) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <select
              name="labels"
              id="labels"
              value=""
              onChange={(e) => setLabels([...labels, e.target.value])}
              className="border p-2 rounded w-full"
            >
              <option value="" disabled>
                Add a label
              </option>
              {labelsArr.map((label ,idx) => (
                <option key={label.id} value={label.name}>
                  {label.name}
                </option>
              ))}
            </select>

            {labels.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {labels.map((l, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                    {l}
                  </span>
                ))}
              </div>
            )}
            <button onClick={() => setShowOverlay(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              x
            </button>
            <button onClick={handleAddTask} className="cursor-pointer p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full">
              Add Task
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTask;
