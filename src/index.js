import './style.css';

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
];

const todoList = () => {
  const container = document.getElementById('container');
  todos.sort((a, b) => a.index - b.index);
  for (let i = 0; i < todos.length; i += 1) {
    const task = document.createElement('div');
    task.classList.add('todo-el');
    task.innerHTML = `
    <input type='checkbox'>
    <p>${todos[i].description}</p>
    `;
    container.appendChild(task);
  }

  container.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
      const task = event.target.closest('.todo-el');
      task.classList.toggle('completed');
    }
  });
};
document.addEventListener('DOMContentLoaded', () => {
  todoList();
});
