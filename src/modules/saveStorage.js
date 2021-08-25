export const saveStorage = (items) => {
  localStorage.setItem('todo-list', JSON.stringify(items));
};

export const storedStuff = (name) => JSON.parse(localStorage.getItem(name));
