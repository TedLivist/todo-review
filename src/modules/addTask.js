/* eslint-disable import/no-cycle */

const addTask = (todoInput, storageList) => {
  if (todoInput.value === '') {
    todoInput.focus();
  } else if (storageList != null) {
    storageList.push({
      description: todoInput.value,
      completed: false,
      index: storageList.length + 1,
    });
  } else {
    storageList = [];
    storageList.push({
      description: todoInput.value,
      completed: false,
      index: 1,
    });
  }

  return storageList;
};

export default addTask;