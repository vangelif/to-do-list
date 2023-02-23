import './style.css';

const itemValue = document.getElementById('insertTask');
const itemsDisplay = document.getElementById('container');
const addItemBtn = document.getElementById('addBtn');

let todos = [];

const display = () => {
  itemsDisplay.innerHTML = '';
  todos = JSON.parse(localStorage.getItem('storage-task')) || [];
  todos.forEach((element) => {
    const task = document.createElement('div');
    task.classList.add('todo-el');
    task.innerHTML = `
    <input type='checkbox'>
    <p>${element.description}</p>
    <span>
      <i id='${element.index}' class='fa-solid fa-trash-can'></i>
    </span>
    `;
    itemsDisplay.appendChild(task);

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
