// logo
// search bar
// search button
// add task button

import React from "react";
import AddTask from "./AddTask";
import Projects from "./Projects";

function Nav() {
  return (
    <>
      <div className="w-full flex items-center justify-between p-4 bg-blue-500">
        <h2 className="text-white font-bold text-xl">Boardly</h2>
        <Projects />
        <div className="w-full max-w-md flex items-center">
          <input className="text-white w-full border-1 p-2 rounded-xl" placeholder="Search..." type="text" />
          <button className="ml-2 px-3 py-2 flex items-center justify-center bg-blue-600 text-white rounded-lg text-sm cursor-pointer">
            Search
          </button>
        </div>
        {/* button div */}
        <div className="flex items-center">
          <button className="cursor-pointer ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Project</button>
          <button className="cursor-pointer ml-2 p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Add Label</button>
          <AddTask />
        </div>
      </div>
    </>
  );
}

export default Nav;
