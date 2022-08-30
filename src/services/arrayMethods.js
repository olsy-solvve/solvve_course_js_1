import _ from "lodash";

export const indexOfById = (array, id) => {
  return _.findIndex(array, (elem) => elem.id === id);
};

export const indexOfByName = (array, name) => {
  return _.findIndex(array, (elem) => elem.name === name);
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
