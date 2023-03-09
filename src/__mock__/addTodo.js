import display from './display.js';
import { itemValue } from './variables.js';

const addTodo = () => {
  const todos = JSON.parse(localStorage.getItem('storage-task')) || [];
  const todoObj = {
    completed: false,
    description: itemValue.value,
    index: todos.length + 1,
  };

  todos.push(todoObj);
  localStorage.setItem('storage-task', JSON.stringify(todos));
  itemValue.value = '';
  display();
};

export default addTodo;