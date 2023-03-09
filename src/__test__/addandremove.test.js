const addTodo = require('../__mock__/addTodo.js');

describe ('test for adding todo', () => {    
    test('addTodo should add a new todo item to the localStorage', () => {
        // Arrange
        const initialStorageLength = localStorage.length;
        const todo = {
          completed: false,
          description: 'Test new todo',
          index: 1,
        };
      
        // Act
        addTodo();
      
        // Assert
        const storage = JSON.parse(localStorage.getItem('storage-task'));
        expect(storage.length).toBe(initialStorageLength + 1);
        expect(storage[storage.length - 1]).toMatchObject(todo);
      });
});