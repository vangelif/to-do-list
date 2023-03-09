import { itemsDisplay } from './variables.js';

const display = () => {
  let todos = [];
  itemsDisplay.innerHTML = '';
  todos = JSON.parse(localStorage.getItem('storage-task')) || [];

  todos.forEach((todo) => {
    const task = document.createElement('div');
    task.classList.add('todo-el');
    task.draggable = true;
    task.innerHTML = `
        <input class='tick' type='checkbox' data-set='${todo.index}' ${
  todo.completed ? 'checked' : ''
}>
        <p>${todo.description}</p>
        <span>
          <i id='${todo.index}' class='fa-solid fa-trash-can'></i>
        </span>
      `;

    // set up event listener to update localStorage on description change
    const todo2 = task.children[1];
    todo2.addEventListener('change', () => {
      const listingData = document.getElementById('container');
      const arrayList = Array.from(listingData.children);
      const index = arrayList.indexOf(task);
      const taskLocal = JSON.parse(localStorage.getItem('storage-task'));
      taskLocal[index].description = todo2.value;
      localStorage.setItem('localItem', JSON.stringify(taskLocal));
    });

    // set up event listener to toggle completed class on checkbox change
    task.addEventListener('change', (event) => {
      if (event.target.type === 'checkbox') {
        task.classList.toggle('completed');
      }
    });

    itemsDisplay.appendChild(task);
  });
};

export default display;
