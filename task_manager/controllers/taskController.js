import * as taskService from '../data/taskService.js';


export function getTasks(req, res) {
    const allTasks = taskService.getAllTasks();
    res.json(allTasks);
}


export function getTask(req, res) {
    const task = taskService.getTaskById(Number(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
}


export function createTask(req, res) {
    const { title, description, dueDate, status } = req.body;
    if (!title || !description || !dueDate) {
        return res.status(400).json({ error: 'Title, description, and dueDate are required' });
    }
    const task = taskService.createTask({ title, description, dueDate, status });
    res.status(201).json(task);
}


export function updateTask(req, res) {
    const updatedTask = taskService.updateTask(Number(req.params.id), req.body);
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.json(updatedTask);
}


export function deleteTask(req, res) {
    const success = taskService.deleteTask(Number(req.params.id));
    if (!success) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
}
