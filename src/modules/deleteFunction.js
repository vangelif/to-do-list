const deleteFunction = (todos, index) => {
  console.log('clicked delete');
  const removeTasks = todos.filter((element) => element.index !== index + 1);
  removeTasks.forEach((element, i) => {
    element.index = i + 1;
  });
  return removeTasks;
};

module.exports = deleteFunction;