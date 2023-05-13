const addTodoTask = (todos, itemValue) => {
  console.log('123')
  const todoObj = {
    completed: false,
    itemValue,
    index: todos.length + 1,
  };
  todos.push(todoObj);
  return todos;
};

// module.exports = addTodoTask;
export default addTodoTask;