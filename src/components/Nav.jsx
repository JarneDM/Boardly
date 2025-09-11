import React from "react";
import AddTask from "./AddTask";
import Projects from "./Projects";
import AddProject from "./AddProject";
import AddLabel from "./AddLabel";

function Nav({ selectedProject, setSelectedProject, search, setSearch }) {
  return (
    <>
      <div className="w-full flex items-center justify-between p-4 bg-blue-500">
        <h2 className="text-white font-bold text-xl">Boardly</h2>
        <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        <div className="w-full max-w-md flex items-center">
          <input
            className="text-white w-full border-1 p-2 rounded-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            type="text"
          />

        </div>

        <div className="flex items-center">
          <AddProject />
          <AddLabel />
          <AddTask />
        </div>
      </div>
    </>
  );
}

export default Nav;
