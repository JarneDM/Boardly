import "./App.css";
import Board from "./components/Board";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white min-h-screen dark:bg-[#111827] ">
      <Nav selectedProject={selectedProject} setSelectedProject={setSelectedProject} search={search} setSearch={setSearch} />
      <Board selectedProject={selectedProject} search={search} />
    </div>
  );
}

export default App;
