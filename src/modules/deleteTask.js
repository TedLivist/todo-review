/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import saveStorage from './saveStorage.js';

const deleteTask = (itemIndex, stuff) => {
  // const storedStuff = JSON.parse(localStorage.getItem('todo-list'));

  const newList = stuff.filter((i) => stuff.indexOf(i) !== itemIndex);
  for (let i = 0; i <= newList.length - 1; i++) {
    newList[i].index = newList.indexOf(newList[i]) + 1;
  }
  return newList;
};

export default deleteTask;