import './style.css';
import deleteFunction from './modules/deleteFunction.js';
import { getFromStorage, saveToStorage } from './modules/localStorage.js';
import addTodoTask from './modules/addFunction.js';
import editNewTodos from './modules/editFunction.js';
import completedTasks from './modules/updates.js';
import clearAllCompleted from './modules/clearAllCompleted.js';


const todos = [
  {
    description: 'mopping',
    completed: true,
    index: 3,
  },
  {
    description: 'clean windows',
    completed: true,
    index: 2,
  },
  {
    description: 'laundry',
    completed: false,
    index: 1,
  },
  {
    description: 'dissolve rust',
    completed: false,
    index: 4,
  },
];

const todoList = () => {
  const container = document.getElementById('container');
  todos.sort((a, b) => a.index - b.index);
  for (let i = 0; i < todos.length; i += 1) {

    const task = document.createElement('div');
    task.classList.add('todo-el');
    task.draggable = true;
    task.innerHTML = `
    <input class='tick' type='checkbox' id="tick" data-set='${element.index}' ${
  element.completed ? 'checked' : ''
}>
    <p id="task-name" contenteditable="true">${element.itemValue}</p>
    <span class="trash" onclick="removeTask(${index})"><i class="fa-solid fa-trash-can"></i>
    </span>
    `;
    itemsDisplay.appendChild(task);
    const taskName = task.querySelector('#task-name');
    taskName.addEventListener('blur', () => {
      const editTaskContent = taskName.textContent.trim();
      todos = editNewTodos(todos, index, editTaskContent);
      saveToStorage(todos);
    });
    taskName.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        taskName.blur();
      }
    });

    const checkbox = task.querySelector('#tick');
    checkbox.addEventListener('change', () => {
      todos = completedTasks(index, todos);
      saveToStorage(todos);
      display();
    });
  });
  saveToStorage(todos);
};


document.addEventListener('DOMContentLoaded', () => {
  todoList();

});

window.removeTask = (index) => {
  todos = deleteFunction(todos, index);
  saveToStorage(todos);
  display();
};

eraseAllBtn.addEventListener('click', () => {
  todos = clearAllCompleted(todos);
  saveToStorage(todos);
  display();
});

display();