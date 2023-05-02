const deleteFunction = require('../modules/deleteFunction.js');

const todos = [
  { index: 1, itemValue: 'Mopping', completed: false },
  { index: 2, itemValue: 'Laundry', completed: false },
  { index: 3, itemValue: 'Task 3', completed: true },
  { index: 4, itemValue: 'Clean Dishes', completed: true },
  { index: 5, itemValue: 'Bathe the cat', completed: false },
];

describe('Remove a task from To-Do List', () => {
  test('Delete a task from the list', () => {
    const remainingTasks = deleteFunction(todos, 3 - 1);
    expect(remainingTasks).toEqual([
      { index: 1, itemValue: 'Mopping', completed: false },
      { index: 2, itemValue: 'Laundry', completed: false },
      { index: 3, itemValue: 'Clean Dishes', completed: true },
      { index: 4, itemValue: 'Bathe the cat', completed: false },
    ]);
    for (let i = 0; i < remainingTasks.length; i += 1) {
      expect(remainingTasks[i].index).toEqual(i + 1);
    }
  });
});