// import React, { useEffect, useState } from "react";
import toggle from "../../assets/toggle.png";

function ToggleDark() {
  // const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <button
        onClick={toggleDark}
        className=" border-none bg-transparent p-0 m-0 flex items-center dark:transform dark:rotate-180 dark:transition-all transition-all"
      >
        <img className="min-h-[2rem] max-h-[2rem] min-w-[2rem] invert" src={toggle} alt="Toggle Dark Mode" />
      </button>
    </div>
  );
}

export default ToggleDark;
