import React from "react";
import AddTask from "./AddTask";
import Projects from "./Projects";
import AddProject from "./AddProject";
import AddLabel from "./AddLabel";
import ToggleDark from "./ToggleDark";

function Nav({ selectedProject, setSelectedProject, search, setSearch }) {
  return (
    <>
      <div className="w-full flex items-center justify-between p-4 bg-blue-600">
        <div className="flex items-center space-x-4">
          <h1 className="text-white font-bold text-2xl mr-5">Boardly</h1>
          <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          <AddProject />
        </div>
        <div className="w-full max-w-md flex items-center">
          <input
            className="text-white w-full border-1 p-2 rounded-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            type="text"
          />
        </div>

        <div className="flex items-center space-x-5">
          <AddLabel />
          <ToggleDark />
        </div>
      </div>
    </>
  );
}

export default Nav;
