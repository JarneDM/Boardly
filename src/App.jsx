import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KanbanPage from "./pages/KanbanPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import WhiteBoardPage from "./pages/WhiteBoardPage.jsx";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <KanbanPage selectedProject={selectedProject} setSelectedProject={setSelectedProject} search={search} setSearch={setSearch} />
          }
        />
        <Route
          path="/calendar"
          element={
            <CalendarPage selectedProject={selectedProject} setSelectedProject={setSelectedProject} search={search} setSearch={setSearch} />
          }
        />
        <Route
          path="/whiteboard"
          element={
            <WhiteBoardPage
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              search={search}
              setSearch={setSearch}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
