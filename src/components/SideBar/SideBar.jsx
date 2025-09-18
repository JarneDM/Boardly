import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex justify-center items-center w-full bg-white rounded-b-xl text-blue-400 border-b-[3px] border-blue-400 p-1">
      <nav className="flex items-center justify-between flex-row w-[70%] h-10 p-2 ">
        <Link to="/" className="m-1 p-2 rounded hover:bg-blue-400 hover:text-white transition">
          Kanban
        </Link>
        <Link to="/calendar" className="m-1 p-2 rounded hover:bg-blue-400 hover:text-white transition">
          Calendar
        </Link>
        <Link to="/whiteboard" className="m-1 p-2 rounded hover:bg-blue-400 hover:text-white transition">
          Whiteboard
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
