import React, { useState } from "react";
import { db } from "../db.js";
import { Trash } from "lucide-react";

function EditTask({ selectedTask, setSelectedTask, setShowEdit }) {
  const [newName, setNewName] = useState("");

  const handleTaskEdit = async () => {
    try {
      await db.tasks.update(selectedTask.id, { title: newName });
      setNewName("");
      setShowEdit(false);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTaskLabel = async (label) => {
    try {
      // filter out by id (safe since labels are objects)
      const updatedLabels = selectedTask.labels.filter((l) => l.id !== label.id);

      await db.tasks.update(selectedTask.id, { labels: updatedLabels });

      setSelectedTask({
        ...selectedTask,
        labels: updatedLabels,
      });
    } catch (err) {
      console.error("Failed to delete task label:", err);
    }
  };
  return (
    <div>
      <div className="fixed grid inset-0 items-center justify-center bg-opacity-50 z-50">
        <div className="bg-white p-10 space-y-4 rounded-lg w-70 shadow-lg">
          <h2 className="flex justify-center items-center text-lg">
            Task: <b className="ml-1">{selectedTask.title}</b>
          </h2>
          <hr className="border-[0.5]" />
          {/* name */}
          <div className="bg-gray-200 p-2.5 rounded-md">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Task title"
              className="border p-2 rounded w-full bg-white"
            />
          </div>
          {/* labels */}
          <div className="bg-gray-200 shadow-md p-2 rounded-md space-y-2 ">
            {selectedTask.labels?.map((label) => (
              <div key={label.id} className="flex space-x-2">
                <p className="flex justify-start text-base items-center bg-blue-100 text-blue-700 rounded-md p-1 shadow-md">{label.name}</p>
                <div className="space-x-1 flex items-center justify-center">
                  <button onClick={() => deleteTaskLabel(label)}>
                    <Trash className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setShowEdit(false)}
              className="cursor-pointer p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-md hover:bg-blue-700 w-full"
            >
              Close
            </button>
            <button
              onClick={handleTaskEdit}
              className="cursor-pointer p-2 bg-blue-500 hover:bg-blue-300 text-white rounded-md hover:bg-blue-700 w-full"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
