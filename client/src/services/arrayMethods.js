import _ from "lodash";

export const indexOfById = (arr, id) => {
  return _.findIndex(arr, (elem) => elem.id === id);
};

export const indexOfByName = (arr, name) => {
  return _.findIndex(arr, (elem) => elem.name === name);
};

export const getTodosType = (todos, isRemoved = false) => {
  return _.filter(todos, ["removed", isRemoved]);
};

export const getDeletedTodoTypes = (todos, isDeleted) => {
  return _.filter(todos, ["fullRemoved", isDeleted]);
};

export const findTodosByType = (todos, currentType) => {
  return _.find(todos, ["label", currentType]);
};

export const sortTodos = (todos, currentType, isRemoved = false) => {
  const todosByType = findTodosByType(todos, currentType);
  return _.filter(todosByType.list, ["removed", isRemoved]);
};

export const findTodo = (todos, callback) => {
  return _.find(todos, callback);
};
