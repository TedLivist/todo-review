const deleteCompleted = (storedItems) => {
  const uncompletedItems = storedItems.filter((item) => item.completed === false);

  for (let i = 0; i <= uncompletedItems.length - 1; i += 1) {
    const indx = uncompletedItems.indexOf(uncompletedItems[i]);
    uncompletedItems[i].index = indx + 1;
  }

  return uncompletedItems;
};

export default deleteCompleted;