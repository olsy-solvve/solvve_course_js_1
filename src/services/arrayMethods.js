export const indexOfById = (array, id) => {
  let target = -1;
  array.forEach((item, index) => {
    if (item.id === id) {
      target = index;
    }
  });
  return target;
};

export const indexOfByName = (array, name) => {
  let target = -1;
  array.forEach((item, index) => {
    if (item.name === name) {
      target = index;
    }
  });
  return target;
};

export const sortTodo = (array, currentType) => {
  const todoList = [];
  array.forEach((todoType) => {
    if (todoType.label === currentType) {
      todoType.list.forEach((todo) => {
        if (todo.removed === false) {
          todoList.push(todo);
        }
      });
    }
  });
  return todoList;
};
