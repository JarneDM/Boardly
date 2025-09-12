import Dexie from "dexie";

export const db = new Dexie("BoardlyDB");
db.version(1).stores({
  projects: "++id, name",
  tasks: "++id, title, description, status, labels, projectId, [status+projectId]",
  labels: "++id, name",
});

db.on("populate", () => {
  db.projects.bulkPut([{ name: "My Project" }, { name: "Work" }]);
  db.labels.bulkPut([
    { name: "Urgent" },
    { name: "Low Priority" },
    { name: "Bug" },
    { name: "Feature" },
    { name: "School" },
    { name: "Personal" },
  ]);
});

db.open();
