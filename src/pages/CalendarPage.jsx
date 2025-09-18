import React from "react";
import CalendarView from "../components/CalendarView/CalendarView.jsx";
import Nav from "../components/Header/Nav.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";

function CalendarPage({ selectedProject, setSelectedProject, search, setSearch }) {
  return (
    <div>
      <Nav selectedProject={selectedProject} setSelectedProject={setSelectedProject} search={search} setSearch={setSearch} />
      <SideBar />
      <CalendarView />
    </div>
  );
}

export default CalendarPage;
