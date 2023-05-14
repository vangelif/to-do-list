import "./style.scss";
import deleteFunction from './modules/deleteFunction.js';
import { getFromStorage, saveToStorage } from './modules/localStorage.js';
import addTodoTask from './modules/addFunction.js';
import editNewTodos from './modules/editFunction.js';
import clearAllCompleted from './modules/clearAllCompleted.js';
import completedTasks from './modules/updates.js';

const itemValue = document.getElementById('insertTask');
const itemsDisplay = document.getElementById('container');
const addItemBtn = document.getElementById('addBtn');
const eraseAllBtn = document.getElementById('erase');

let todos = getFromStorage();

const addBlurEvent = (taskName, index) => {
  taskName.addEventListener('blur', () => {
    const editTaskContent = taskName.textContent.trim();
    todos = editNewTodos(todos, index, editTaskContent);
    saveToStorage(todos);
  });
};

const addKeyDownEvent = (taskName) => {
  taskName.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      taskName.blur();
    }
  });
};

const addCheckboxChangeEvent = (checkbox, index) => {
  checkbox.addEventListener('change', () => {
    todos = completedTasks(index, todos);
    saveToStorage(todos);
    display();
  });
};

const createTaskElement = (element, index) => {
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
  const taskName = task.querySelector('#task-name');
  addBlurEvent(taskName, index);
  addKeyDownEvent(taskName);
  const checkbox = task.querySelector('#tick');
  addCheckboxChangeEvent(checkbox, index);
  return task;
};

const display = () => {
  itemsDisplay.innerHTML = '';
  todos.forEach((element, index) => {
    const task = createTaskElement(element, index);
    itemsDisplay.appendChild(task);
  });
  saveToStorage(todos);
};

addItemBtn.addEventListener('click', (e) => {
  console.log('1');
  e.preventDefault();
  addTodoTask(todos, itemValue.value);
  display();
  itemValue.value = '';
});

addItemBtn.addEventListener('Enter', (e) => {
  console.log('2');

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
  console.log('button erase all');

  todos = clearAllCompleted(todos);
  saveToStorage(todos);
  display();
});

// export { addBlurEvent, addCheckboxChangeEvent, addKeyDownEvent };

display();
