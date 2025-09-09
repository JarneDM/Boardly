import React from "react";
import { db } from "../db.js";

function AddTask() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("Todo");
  const [labels, setLabels] = React.useState([]);
  const [showOverlay, setShowOverlay] = React.useState(false); // 👈 controls overlay visibility

  const defaultLabels = ["Urgent", "Low Priority", "Bug", "Feature", "School", "Personal"];
  const defaultStatuses = ["ToDo", "In Progress", "Done"];

  const handleAddTask = async () => {
    try {
      await db.tasks.add({
        title,
        description,
        status,
        labels,
        createdAt: new Date(),
      });

      setTitle("");
      setDescription("");
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
        className="cursor-pointer ml-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Add Task
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

            <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded w-full">
              {defaultStatuses.map((status) => (
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
              {defaultLabels.map((label) => (
                <option key={label} value={label}>
                  {label}
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
