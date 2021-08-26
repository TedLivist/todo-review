import MockStorage from "../../__mock__/storage";
import check from "../modules/checkComplete";

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


describe('Local Storage test on checkStatus function', () => {

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
    const newTaskTwo =  { description: 'task 2', completed: true, index: 2 };
    todos.push(newTaskTwo)
    mockStorage.setItem('to-do-list', todos);
    const arr = mockStorage.getItem('to-do-list');
    check(box, arr[1]);
    expect(arr[1].completed).toBe(false);
    });
});