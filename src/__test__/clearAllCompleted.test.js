const clearAllCompleted = require('../modules/clearAllCompleted.js');

const usedTodo = [
  { itemValue: 'cooking', completed: true, index: 1 },
  { itemValue: 'moping', completed: true, index: 2 },
  { itemValue: 'dancing', completed: false, index: 3 },
];

const leftTodo = [
  { itemValue: 'dancing', completed: false, index: 1 },
];

describe('Clear All the tasks which are completed in To-Do List', () => {
  test('Remove All the Completed ToDo items', () => {
    expect(
      clearAllCompleted(usedTodo),
    ).toEqual(leftTodo);
  });
});