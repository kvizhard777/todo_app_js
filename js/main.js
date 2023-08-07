import addTask from "./addTask.js";
import checkAndRemoveTask from "./checkAndRemoveTask.js";

const addBtn = document.querySelector('.todo__add-btn');
const deleteBtn = document.querySelectorAll('.delete');
const todoList = document.querySelector('.todo__list');

// Add Task
addTask;

// Check And Remove Task
checkAndRemoveTask;

addBtn.addEventListener('click', addTask);
todoList.addEventListener('click', checkAndRemoveTask);
deleteBtn.forEach((item) => item.addEventListener('click', deleteTask));