const completedTasks = (index, tasks) => {
  const updatedCheckbox = [...tasks];
  updatedCheckbox[index] = {
    ...updatedCheckbox[index],
    completed: !updatedCheckbox[index].completed,
  };
  return updatedCheckbox;
};

module.exports = completedTasks;