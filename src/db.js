import Dexie from "dexie";

export const db = new Dexie("BoardlyDB");
db.version(1).stores({
  tasks: "++id, title, description, status, labels",
});
