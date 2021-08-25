import addTask from '../modules/addTask.js';
import deleteTask from '../modules/deleteTask.js';
import MockStorage from '../../__mock__/storage.js'

describe('Add Task Function', () => {
  test('adds one task to collection', () => {
    const todoList = []
    addTask({value: "First task"}, todoList)
    expect(todoList.length).toBe(1)
  });

  test('adds two tasks to collection', () => {
    const todoList = []
    addTask({value: "First task"}, todoList);
    addTask({value: "Second Task"}, todoList);
    expect(todoList.length).toBe(2);
  });

});

describe('Storage test', () => {
  describe('Storage Add', () => {
    test('Add should add 1 item to local storage', () => {
      let mockStorage = new MockStorage();
      mockStorage.setItem('to-do-list', []);
      const todos = [];
      const newTaskOne = { description: 'task 1', completed: false, index: 1 };
      todos.push(newTaskOne);
      mockStorage.setItem('to-do-list', todos);
      expect(mockStorage.getItem('to-do-list').length).toBe(1);
    });
  });
});

describe('Add Task Function', () => {
  test('adds one task to collection', () => {
    const todoList = [{ description: 'task 1', completed: false, index: 1 }, { description: 'task 1', completed: false, index: 2 }]
    const updatelist = deleteTask(1, todoList);
    expect(updatelist.length).toBe(1);
  });

  test('adds two tasks to collection', () => {
    const todoList = [{ description: 'task 1', completed: false, index: 1 }, { description: 'task 1', completed: false, index: 2 }, { description: 'task 1', completed: false, index: 2 }];
    const updatelist = deleteTask(2, todoList);
    expect(updatelist.length).toBe(2);
  });
});

    // let mockStorage = new MockStorage()

    // const newTaskList = addTask({value: "todoOne"}, mockStorage.getItem('to-do-list'))
    // mockStorage.setItem('to-do-list', newTaskList)
    // const secondTask = addTask({value: "TaskTwo"}, mockStorage.getItem('to-do-list'))
    // mockStorage.setItem('to-do-list', secondTask)
    // const thirdTask = addTask({value: "TaskThree"}, mockStorage.getItem('to-do-list'))
    // mockStorage.setItem('to-do-list', thirdTask)

    // console.log(mockStorage.getItem('to-do-list'))



    // mockStorage.setItem('haha', ['lol', 'pop'])
    // console.log(mockStorage.getItem('haha'))