const addTodoTask = (todos, itemValue) => {
  const todoObj = {
    completed: false,
    itemValue,
    index: todos.length + 1,
  };
  todos.push(todoObj);
  return todos;
};

module.exports = addTodoTask;
