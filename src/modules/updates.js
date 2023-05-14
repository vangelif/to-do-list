const completedTasks = (index, tasks) => {
  console.log('completed tasks');

  const updatedCheckbox = [...tasks];
  updatedCheckbox[index] = {
    ...updatedCheckbox[index],
    completed: !updatedCheckbox[index].completed,
  };
  return updatedCheckbox;
};

module.exports = completedTasks;