import './style.css';
import deleteFunction from './modules/deleteFunction.js';
import { getFromStorage, saveToStorage } from './modules/localStorage.js';
import addTodoTask from './modules/addFunction.js';
import editNewTodos from './modules/editFunction.js';
import completedTasks from './modules/updates.js';
import clearAllCompleted from './modules/clearAllCompleted.js';

const itemValue = document.getElementById('insertTask');
const itemsDisplay = document.getElementById('container');
const addItemBtn = document.getElementById('addBtn');
const eraseAllBtn = document.getElementById('erase');

let todos = getFromStorage();

const display = () => {
  itemsDisplay.innerHTML = '';
  todos.forEach((element, index) => {
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

addItemBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addTodoTask(todos, itemValue.value);
  display();
  itemValue.value = '';
});

addItemBtn.addEventListener('Enter', (e) => {
  e.preventDefault();
  addTodoTask(todos, itemValue.value);
  display();
  itemValue.value = '';
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