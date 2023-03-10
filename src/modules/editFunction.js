const editNewTodos = (todos, index, newItemValue) => {
  todos[index].itemValue = newItemValue;
  return todos;
};

module.exports = editNewTodos;
