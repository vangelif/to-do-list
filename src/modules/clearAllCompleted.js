const clearAllCompleted = (tasks) => {
  console.log('clicked erase all');

  const remainingTasks = tasks.filter((task) => !task.completed);
  remainingTasks.forEach((element, i) => {
    element.index = i + 1;
  });
  return remainingTasks;
};

module.exports = clearAllCompleted;