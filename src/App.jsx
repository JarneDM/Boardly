import "./App.css";
import Board from "./components/Board";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <>
      <Nav selectedProject={selectedProject} setSelectedProject={setSelectedProject} search={search} setSearch={setSearch} />
      <Board selectedProject={selectedProject} search={search} />
    </>
  );
}

export default App;
