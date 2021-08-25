/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable import/no-cycle, radix */
/* eslint-disable no-unused-expressions */
import './assets/stylesheet/style.css';
import check from './modules/checkComplete.js';
import { saveStorage, storedStuff } from './modules/saveStorage.js';
import addTask from './modules/addTask.js';
import editTask from './modules/editTask.js';
import deleteTask from './modules/deleteTask.js';
import deleteCompleted from './modules/deleteCompleted.js';

const container = document.querySelector('.container');
const taskInput = document.querySelector('.italics');
const addButton = document.querySelector('.add');
const clearCompletedLink = document.querySelector('.clear-all');

const renderTasks = () => {
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }

  const storedList = JSON.parse(localStorage.getItem('todo-list'));
  if (storedList == null) {
    return false;
  } else {
    for (let i = 0; i <= storedList.length - 1; i += 1) {
      const taskContainer = document.createElement('div');
      taskContainer.id = storedList[i].index;
      taskContainer.classList.add('list');

      const taskCheckbox = document.createElement('input');
      taskCheckbox.type = 'checkbox';
      taskCheckbox.classList.add('check');

      const taskDescription = document.createElement('label');
      taskDescription.classList.add('label');
      taskDescription.textContent = `${storedList[i].description}`;
      taskDescription.contentEditable = true;

      if (storedList[i].completed) {
        taskCheckbox.checked = true;
        taskDescription.classList.add('strike');
      }

      const trash = document.createElement('span');
      trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
      trash.style.cursor = 'pointer';
      trash.id = storedList.indexOf(storedList[i]);

      taskContainer.appendChild(taskCheckbox);
      taskContainer.appendChild(taskDescription);
      taskContainer.appendChild(trash);
      container.appendChild(taskContainer);

      taskDescription.addEventListener('focus', () => {
        taskDescription.classList.remove('strike');
      });

      taskDescription.addEventListener('blur', (e) => {
        editTask(e.target, storedList, storedList[i]);
      });

      taskCheckbox.addEventListener('change', (e) => {
        check(e.target, storedList[i]);
        saveStorage(storedList);
        taskDescription.classList.toggle('strike');
      });

      trash.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const deleteItem = deleteTask(parseInt(trash.id, 10), storedStuff('todo-list'));
        saveStorage(deleteItem);
        renderTasks();
      });
    }
  }
};

addButton.addEventListener('click', () => {
  const items = JSON.parse(localStorage.getItem('todo-list'));
  saveStorage(addTask(taskInput, items));
  renderTasks();
  taskInput.value = '';
});

clearCompletedLink.addEventListener('click', () => {
  const items = JSON.parse(localStorage.getItem('todo-list'));
  const unCompletedItems = deleteCompleted(items);
  saveStorage(unCompletedItems);
  renderTasks();
});

window.addEventListener('load', () => {
  const todoList = JSON.parse(localStorage.getItem('todo-list'));

  if (todoList == null) {
    return false;
  } else {
    renderTasks();
  }
});

export default renderTasks;