import React from "react";
import Board from "../components/Status/Board.jsx";
import Nav from "../components/Header/Nav.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
// import { useState } from "react";

function KanbanPage({ selectedProject, setSelectedProject, search, setSearch }) {
  return (
    <div className="bg-[#FFF9D0] min-h-screen dark:bg-[#111827] transition-colors">
      <Nav selectedProject={selectedProject} setSelectedProject={setSelectedProject} search={search} setSearch={setSearch} />
      <SideBar />
      <Board selectedProject={selectedProject} search={search} />
    </div>
  );
}

export default KanbanPage;
