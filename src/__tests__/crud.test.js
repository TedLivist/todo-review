import MockStorage from '../../__mock__/storage.js';
import check from '../modules/checkComplete.js';
import deleteCompleted from '../modules/deleteCompleted.js';
import editTask from '../modules/editTask.js';

describe('Check Function', () => {
  test('updates the completed status to true when checked', () => {
    const box = { checked: true };
    const item = { completed: false };
    check(box, item);
    expect(item.completed).toBe(true);
  });

  test('updates the completed status to false when unchecked', () => {
    const box = { checked: false };
    const item = { completed: true };
    check(box, item);
    expect(item.completed).toBe(false);
  });
});

describe('Local Storage test on check function', () => {
  test('Update the local storage status from false to true', () => {
    const mockStorage = new MockStorage();
    const box = { checked: true };
    const todos = [];
    const newTaskOne = { description: 'task 1', completed: false, index: 1 };
    todos.push(newTaskOne);
    mockStorage.setItem('to-do-list', todos);
    const arr = mockStorage.getItem('to-do-list');
    check(box, arr[0]);
    expect(arr[0].completed).toBe(true);
  });

  test('Update the local storage status from true to false', () => {
    const mockStorage = new MockStorage();
    const box = { checked: false };
    const todos = [];
    const newTaskOne = { description: 'task 1', completed: false, index: 1 };
    todos.push(newTaskOne);
    const newTaskTwo = { description: 'task 2', completed: true, index: 2 };
    todos.push(newTaskTwo);
    mockStorage.setItem('to-do-list', todos);
    const arr = mockStorage.getItem('to-do-list');
    check(box, arr[1]);
    expect(arr[1].completed).toBe(false);
  });
});

describe('DeleteCompleted Function', () => {
  test('deletes completed items', () => {
    const items = [{ completed: true }, { completed: false }, { completed: true }];
    const uncompletedItems = deleteCompleted(items);
    expect(uncompletedItems.length).toBe(1);
  });
});

describe('DeleteCompleted Function with LocalStorage', () => {
  test('DeleteCompleted Function delete completed items from Localstorage', () => {
    const mockStorage = new MockStorage();
    const todos = [];
    const newTaskOne = { description: 'task 1', completed: true, index: 1 };
    todos.push(newTaskOne);
    const newTaskTwo = { description: 'task 2', completed: false, index: 2 };
    todos.push(newTaskTwo);
    mockStorage.setItem('to-do-list', todos);
    const arr = mockStorage.getItem('to-do-list');
    const uncompleted = deleteCompleted(arr);
    mockStorage.setItem('to-do-list', uncompleted);
    const getUncompleted = mockStorage.getItem('to-do-list');
    expect(getUncompleted.length).toBe(1);
  });
});

describe('EditTask Function', () => {
  test('EditTask function edit the description of input', () => {
    const todos = [{ index: 1, description: 'TestContext' }, { index: 2, description: 'TestOne' }];
    const updateText = { textContent: 'UpdateTest' };
    const updateTask = editTask(updateText, todos, todos[0]);
    expect(updateTask[0].description).toBe('UpdateTest');
  });
});

describe('Edit task Function with LocalStorage', () => {
  test('updates item in localStorage', () => {
    const mockStorage = new MockStorage();
    const todos = [{ description: 'First task', index: 1 }, { description: 'Second Task', index: 2 }];
    mockStorage.setItem('to-do-list', todos);
    const getTasks = mockStorage.getItem('to-do-list');
    const someText = { textContent: 'First task - Changed' };
    const updatedTasks = editTask(someText, getTasks, getTasks[0]);
    mockStorage.setItem('to-do-list', updatedTasks);
    const getUpdatedTasks = mockStorage.getItem('to-do-list');
    expect(getUpdatedTasks[0].description).toBe('First task - Changed');
  });
});