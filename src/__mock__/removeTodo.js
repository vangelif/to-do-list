import display from './display.js';

const removeTodo = (index) => {
  const todos = [];
  const removeTasks = todos.filter((element) => element.index !== index);
  todos.length = 0;
  removeTasks.forEach((element, i) => {
    element.index = i + 1;
  });
  todos.push(...removeTasks);
  localStorage.setItem('storage-task', JSON.stringify(todos));
  display();
};

export default removeTodo;