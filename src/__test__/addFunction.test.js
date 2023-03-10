const addTodoTask = require('../modules/addFunction.js');

const preTask = [
  { itemValue: 'Milk Bill', completed: false, index: 1 },
  { itemValue: 'Electricity Bill', completed: true, index: 2 },
];

const taskAdded = [
  { itemValue: 'Milk Bill', completed: false, index: 1 },
  { itemValue: 'Electricity Bill', completed: true, index: 2 },
  { itemValue: 'Laundry', completed: false, index: 3 },
];

describe('To add a task', () => {
    test('Add a newtask', () => {
      expect(
        addTodoTask(preTask, 'Laundry'),
      ).toEqual(taskAdded);
    });
  });