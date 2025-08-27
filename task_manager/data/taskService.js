import Task from '../models/task.js';

let tasks = [];
let nextId = 1;


export function getAllTasks() {
    return tasks;
}


export function getTaskById(id) {
    return tasks.find(task => task.id === id);
}


export function createTask({ title, description, dueDate, status }) {
    const task = new Task(nextId++, title, description, dueDate, status);
    tasks.push(task);
    return task;
}


export function updateTask(id, updatedFields) {
    const task = getTaskById(id);
    if (!task) return null;
    Object.assign(task, updatedFields);
    return task;
}


export function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
}
