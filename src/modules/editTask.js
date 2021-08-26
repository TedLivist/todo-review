const editTask = (description, items, item) => {
  const itemIndex = item.index;
  const itemToEdit = items[itemIndex - 1];
  itemToEdit.description = description.textContent;
  return items;
};

export default editTask;