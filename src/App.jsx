import "./App.css";
import Board from "./components/Board";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Nav selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      <Board selectedProject={selectedProject} />
    </>
  );
}

export default App;
