const completion = (e) => {
  const tick = e.target.closest('.tick');
  if (!tick) return;

  const storageIndex = parseInt(tick.getAttribute('data-set'), 10);
  const task = JSON.parse(localStorage.getItem('storage-task')) || [];
  const matchIndex = task.find((todo) => todo.index === storageIndex);
  matchIndex.completed = !matchIndex.completed;
  localStorage.setItem('storage-task', JSON.stringify(task));
};

export default completion;