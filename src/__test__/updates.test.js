const completedTasks = require('../modules/updates.js');

describe('tasksCompleted', () => {
  test(' Show the status of the task whether completed at a given index', () => {
    const oldTodo = [
      { itemValue: 'project task', completed: true, index: 1 },
      { itemValue: 'html project', completed: true, index: 2 },
      { itemValue: 'css project', completed: false, index: 3 },
    ];

    const newTodo = completedTasks(3 - 1, oldTodo);

    expect(newTodo).toEqual([
      { itemValue: 'project task', completed: true, index: 1 },
      { itemValue: 'html project', completed: true, index: 2 },
      { itemValue: 'css project', completed: true, index: 3 },
    ]);
  });
});