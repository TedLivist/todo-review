/* eslint-disable linebreak-style */

import addTask from '../modules/addTask.js';
import deleteTask from '../modules/deleteTask.js';
import MockStorage from '../../__mock__/storage.js';

describe('Add Task Function', () => {
  test('adds one task to collection', () => {
    const todoList = [];
    addTask({ value: 'First task' }, todoList);
    expect(todoList.length).toBe(1);
  });

  test('adds two tasks to collection', () => {
    const todoList = [];
    addTask({ value: 'First task' }, todoList);
    addTask({ value: 'Second Task' }, todoList);
    expect(todoList.length).toBe(2);
  });
});

describe('Delete Task Function', () => {
  test('deletes one task from collection', () => {
    const todoList = [{ description: 'task 1', completed: false, index: 1 }, { description: 'task 1', completed: false, index: 2 }];
    const updatelist = deleteTask(1, todoList);
    expect(updatelist.length).toBe(1);
  });

  test('deletes 2 tasks from the collection', () => {
    const todoList = [{ description: 'task 1', completed: false, index: 1 }, { description: 'task 1', completed: false, index: 2 }, { description: 'task 1', completed: false, index: 3 }];
    let updatelist = deleteTask(2, todoList);
    updatelist = deleteTask(1, updatelist);
    expect(updatelist.length).toBe(1);
  });
});

describe('Storage test', () => {
  describe('Storage Add', () => {
    test('Add should add 1 item to local storage', () => {
      const mockStorage = new MockStorage();
      mockStorage.setItem('to-do-list', []);
      const todos = [];
      const newTaskOne = { description: 'task 1', completed: false, index: 1 };
      todos.push(newTaskOne);
      mockStorage.setItem('to-do-list', todos);
      expect(mockStorage.getItem('to-do-list').length).toBe(1);
    });
  });

  describe('Storage Delete', () => {
    test('Delete should remove 1 item from the local storage', () => {
      const mockStorage = new MockStorage();
      mockStorage.setItem('to-do-list', []);
      const todos = [];
      const newTaskOne = { description: 'task 1', completed: false, index: 1 };
      todos.push(newTaskOne);
      const newTaskTwo = { description: 'task 2', completed: false, index: 2 };
      todos.push(newTaskTwo);
      mockStorage.setItem('to-do-list', todos);

      const newList = deleteTask(1, mockStorage.getItem('to-do-list'));
      mockStorage.setItem('to-do-list', newList);

      expect(mockStorage.getItem('to-do-list').length).toBe(1);
    });
  });
});