import Dexie from "dexie";

export const db = new Dexie("BoardlyDB");
db.version(1).stores({
  projects: "++id, name",
  tasks: "++id, title, description, status, labels, projectId, [status+projectId]",
    labels: "++id, name",
});
