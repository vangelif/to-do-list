const clearAllCompleted = (tasks) => {
  const remainingTasks = tasks.filter((task) => !task.completed);
  remainingTasks.forEach((element, i) => {
    element.index = i + 1;
  });
  return remainingTasks;
};

export default clearAllCompleted;