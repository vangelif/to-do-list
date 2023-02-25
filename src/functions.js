import completion from './updates.js';
import {
  itemValue,
  itemsDisplay,
  addItemBtn,
  syncBtn,
  eraseAllBtn,
} from './variables.js';

let todos = [];

const display = () => {
  itemsDisplay.innerHTML = '';
  todos = JSON.parse(localStorage.getItem('storage-task')) || [];
  todos.forEach((element) => {
    const task = document.createElement('div');
    task.classList.add('todo-el');
    task.innerHTML = `
    <input class='tick' type='checkbox' data-set='${element.index}' ${
  element.completed ? 'checked' : ''
}>
    <p>${element.description}</p>
    <span>
      <i id='${element.index}' class='fa-solid fa-trash-can'></i>
    </span>
    `;
    itemsDisplay.appendChild(task);
    // listener which updates the index of remaining tasks
    const todo2 = task.children[1];
    todo2.addEventListener('change', () => {
      const listingData = document.getElementById('container');
      const arrayList = Array.from(listingData.children);
      const index = arrayList.indexOf(task);
      const taskLocal = JSON.parse(localStorage.getItem('storage-task'));
      taskLocal[index].description = todo2.value;
      localStorage.setItem('localItem', JSON.stringify(taskLocal));
    });
  });
  // line-through
  itemsDisplay.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
      const task = event.target.closest('.todo-el');
      task.classList.toggle('completed');
    }
  });
};
document.addEventListener('DOMContentLoaded', () => {
  display();
});

syncBtn.addEventListener('click', () => {
  display();
});
// it hears clicks and pushes value to container
// updates storage
// sets box to null
addItemBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (itemValue.value === '') return;
  todos = JSON.parse(localStorage.getItem('storage-task')) || [];

  const todoObj = {
    completed: false,
    description: itemValue.value,
    index: todos.length + 1,
  };

  todos.push(todoObj);
  localStorage.setItem('storage-task', JSON.stringify(todos));

  itemValue.value = '';
  display();
});

// remove function which updates the index
const remove = (index) => {
  const removeTasks = todos.filter((element) => element.index !== index);
  todos.length = 0;
  removeTasks.forEach((element, i) => {
    element.index = i + 1;
  });
  todos.push(...removeTasks);
  localStorage.setItem('storage-task', JSON.stringify(todos));
  display();
};
// remove event listener with calling remove function
itemsDisplay.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    remove(index);
  }
});

// clear all completed tasks
const eraseAll = () => {
  const task = JSON.parse(localStorage.getItem('storage-task')) || [];
  const notDone = task.filter((todo) => !todo.completed);
  localStorage.removeItem('storage-task');
  localStorage.setItem('storage-task', JSON.stringify(notDone));
  display();
};

eraseAllBtn.addEventListener('click', () => {
  eraseAll();
});

// toggles completion status and updates storage
document.addEventListener('change', completion);