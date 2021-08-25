/* eslint-disable import/no-cycle, no-multi-assign */
import renderTasks from '../index.js';
import { saveStorage } from './saveStorage.js';

const deleteCompleted = () => {
  const storedItems = JSON.parse(localStorage.getItem('todo-list'));

  const uncompletedItems = storedItems.filter((item) => item.completed === false);

  let indx = 0;
  for (let i = 0; i <= uncompletedItems.length - 1; i += 1) {
    uncompletedItems[i].index = indx += 1;
  }
  saveStorage(uncompletedItems);
  renderTasks();
};

export default deleteCompleted;