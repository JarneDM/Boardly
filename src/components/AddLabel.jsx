import React, { useState } from "react";
import { db } from "../db.js";
import AddTask from "./AddTask.jsx";

function AddLabel() {
  const [labelName, setLabelName] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAddLabel = async () => {
    try {
      await db.labels.add({ name: labelName });
      setLabelName("");
      setShowOverlay(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div>
        <button
          onClick={() => setShowOverlay(true)}
          className="cursor-pointer ml-2 p-2 bg-white text-blue-500 rounded-md hover:bg-gray-200"
        >
          Add Label
        </button>

        {showOverlay && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="space-y-2 bg-white p-6 rounded-md shadow-md w-96 relative">
              <input
                type="text"
                value={labelName}
                onChange={(e) => setLabelName(e.target.value)}
                placeholder="Label title"
                className="border p-2 rounded w-full"
              />
              <button onClick={() => setShowOverlay(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                x
              </button>
              <button onClick={handleAddLabel} className="cursor-pointer p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full">
                Add Label
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddLabel;
