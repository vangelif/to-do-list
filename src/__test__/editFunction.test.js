const editNewTodos = require('../modules/editFunction.js');

const lastTodo = [
  { itemValue: 'Laundry', completed: true, index: 1 },
  { itemValue: 'Dishes', completed: true, index: 2 },
  { itemValue: 'Walk the dog', completed: false, index: 3 },
];

const newTodo = [
  { itemValue: 'Mopping', completed: true, index: 1 },
  { itemValue: 'Dishes', completed: true, index: 2 },
  { itemValue: 'Walk the dog', completed: false, index: 3 },
];

describe('Edit the todos', () => {
  test('Update todos', () => {
    expect(
      editNewTodos(lastTodo, 1 - 1, 'Mopping'),
    ).toEqual(newTodo);
  });
});