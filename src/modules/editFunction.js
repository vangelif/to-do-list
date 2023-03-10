const editNewTodos = (todos, index, newItemValue) => {
  todos[index].itemValue = newItemValue;
  return todos;
};

export default editNewTodos;
