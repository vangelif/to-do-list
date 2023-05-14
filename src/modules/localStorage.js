export const getFromStorage = () => {
  console.log('retrieved data');

  let storedTodos = JSON.parse(window.localStorage.getItem('storage-task'));
  storedTodos = Array.isArray(storedTodos) ? storedTodos : [];
  return storedTodos;
};

export const saveToStorage = (data) => {
  console.log('saved');

  localStorage.setItem('storage-task', JSON.stringify(data));
};

// module.exports = { getFromStorage, saveToStorage };