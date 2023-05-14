const editNewTodos = (todos, index, newItemValue) => {
  console.log('clicked edit');

  todos[index].itemValue = newItemValue;
  return todos;
};

module.exports = editNewTodos;
