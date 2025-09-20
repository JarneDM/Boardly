import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db.js";
// import "@fullcalendar/core/dist/index.css";
// import "@fullcalendar/daygrid/dist/index.css";

function CalendarView() {
  const tasks = useLiveQuery(() => db.tasks.toArray(), []);

  const safeTasks = tasks || [];

  const events = safeTasks
    .filter((task) => task.duedate)
    .map((task) => ({
      title: task.title,
      date: task.duedate,
      extendedProps: {
        description: task.description,
        labels: task.labels,
        status: tasks.status,
        project: task.projectId,
      },
    }));
  return (
    <div className="flex justify-center items-start h-screen dark:bg-[#111827] p-10 dark:text-blue-500/50 transition-colors overflow-hidden">
      <div className="w-[80%] h-full">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} height="80%" eventContent={renderEventContent} />
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <div>
      <strong>{eventInfo.event.title}</strong>
    </div>
  );
}

export default CalendarView;
