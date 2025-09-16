import "./App.css";
import Board from "./components/Board";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // });

  return (
    <div className="bg-[#FFF9D0] min-h-screen dark:bg-[#111827] transition-colors">
      <Nav selectedProject={selectedProject} setSelectedProject={setSelectedProject} search={search} setSearch={setSearch} />
      <Board selectedProject={selectedProject} search={search} />
    </div>
  );
}

export default App;
