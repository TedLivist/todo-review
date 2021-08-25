import addTask from '../modules/addTask.js';
import { MockStorage } from '../../__mock__/storage.js'

describe('Add Task Function', () => {
  test('adds one task to collection', () => {
    const todoList = []
    addTask({value: "First task"}, todoList)
    expect(todoList.length).toBe(1)
  })

  test('adds two tasks to collection', () => {
    const todoList = []
    addTask({value: "First task"}, todoList)
    addTask({value: "Second Task"}, todoList)
    expect(todoList.length).toBe(2)
  })

})

    let mockStorage = new MockStorage()

    const newTaskList = addTask({value: "todoOne"}, mockStorage.getItem('to-do-list'))
    mockStorage.setItem('to-do-list', newTaskList)
    const secondTask = addTask({value: "TaskTwo"}, mockStorage.getItem('to-do-list'))
    mockStorage.setItem('to-do-list', secondTask)
    const thirdTask = addTask({value: "TaskThree"}, mockStorage.getItem('to-do-list'))
    mockStorage.setItem('to-do-list', thirdTask)

    console.log(mockStorage.getItem('to-do-list'))



    mockStorage.setItem('haha', ['lol', 'pop'])
    console.log(mockStorage.getItem('haha'))