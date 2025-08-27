import express from "express";

const app = express();
app.use(express.json());

let tasks = [
  { id: 1, title: "Task 1", description: "Sample task 1", dueDate: "2025-08-30", status: "pending" },
  { id: 2, title: "Task 2", description: "Sample task 2", dueDate: "2025-09-05", status: "completed" }
];


app.get("/tasks", (req, res) => {
  res.json(tasks);
});


app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});


app.post("/tasks", (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const newTask = { id: tasks.length + 1, title, description, dueDate, status };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, description, dueDate, status } = req.body;
  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.dueDate = dueDate ?? task.dueDate;
  task.status = status ?? task.status;

  res.json(task);
});


app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  const deleted = tasks.splice(index, 1);
  res.json(deleted[0]);
});


app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
