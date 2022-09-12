import {
  indexOfByName,
  getTodosType,
  sortTodos,
  findTodo,
} from "@/services/arrayMethods";

import apiService from "@/services/apiService.js";
import apiOptions from "@/enums/apiOptions.js";

const state = {
  todoTypes: [],
  removedTodoTypes: [],
  todos: [],
  removedTodo: [],
  currentType: "",
};

const getters = {
  getTodoTypes: (state) => {
    const types = [];
    state.todoTypes.forEach((type) => {
      if (type.fullRemoved === false) {
        types.push(type);
      }
    });
    return types;
  },

  getRemovedTodos: (state) => {
    const todos = sortTodos(state.todos);
    todos.forEach((todo) => {
      if (todo.removed === true) {
        todos.push(todo);
      }
    });
    return todos;
  },

  getRemovedTodoTypes: (state) => {
    const removedTypes = [];
    state.todoTypes.forEach((type) => {
      if (type.removed === true) {
        removedTypes.push(type);
      }
    });
    return removedTypes;
  },

  getCurrentType: (state) => {
    return state.currentType;
  },

  getTodos: (state) => {
    return sortTodos(state.todos);
  },

  getTodosProgress: (state) => {
    const todoList = sortTodos(state.todos);
    return todoList.filter((todo) => !todo.completed);
  },

  getTodosCompleted: (state) => {
    const todoList = sortTodos(state.todos);
    return todoList.filter((todo) => todo.completed);
  },

  getRemovedType: (state) => {
    return getTodosType(state.removedTodoTypes, true);
  },
};

const actions = {
  pullTodoTypes: async (context) => {
    const token = localStorage.getItem("currentUser");

    await apiService
      .get(`${apiOptions.URL_SERVER}/todoType`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        context.commit("setTodoTypes", res.data);
        context.dispatch("pullTodosById", res.data[0]);
        localStorage.setItem("currentTypeTodo", res.data);
      });
  },

  pullTodosById: async (context, currentType) => {
    const token = localStorage.getItem("currentUser");

    await apiService
      .get(`${apiOptions.URL_SERVER}/todos/${currentType.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        context.commit("setTodos", res.data);
      });
  },

  addTodoType: async (context, typeName) => {
    const token = localStorage.getItem("currentUser");

    await apiService
      .post(
        `${apiOptions.URL_SERVER}/todoType`,
        { newType: typeName },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        context.commit("addTodoType", res.data);
      });
  },

  addTodo: async (context, todo) => {
    const token = localStorage.getItem("currentUser");
    const currentType = JSON.parse(localStorage.getItem("currentTypeTodo"));

    await apiService
      .post(
        `${apiOptions.URL_SERVER}/todos`,
        { typeId: currentType.id, todo },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        context.commit("addTodoToList", res.data[res.data.length - 1]);
      });
  },

  removeTodoType: async (context, todoType) => {
    const token = localStorage.getItem("currentUser");

    console.log(todoType);
    await apiService
      .delete(`${apiOptions.URL_SERVER}/todoType/${todoType.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        context.commit("removeTodoTypeFromList", res.data.id);
      });
  },

  pullRemovedTodoTypes: async () => {
    const token = localStorage.getItem("currentUser");

    await apiService
      .get(`${apiOptions.URL_SERVER}/archiveTodoType`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        // context.commit("setTodoTypes", res.data);
        // context.dispatch("pullTodosById", res.data[0]);
        // localStorage.setItem("currentTypeTodo", res.data);
      });
  },

  pullRemovedTodosById: async (context, currentType) => {
    const token = localStorage.getItem("currentUser");

    await apiService
      .get(`${apiOptions.URL_SERVER}/archiveTodoType/${currentType.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        // context.commit("setTodos", res.data);
      });
  },
};

const mutations = {
  setTodoTypes: (state, todoTypes) => {
    state.todoTypes = todoTypes;
  },

  setTodos: (state, todos) => {
    state.todos = todos;
  },

  addTodoToList: (state, newTodo) => {
    state.todos.push(newTodo);
  },

  addTodoType(state, typeName) {
    state.todoTypes.push(typeName);
  },

  editTodo(state, editTodo) {
    const todo = findTodo(state.todos, (t) => t._id === editTodo.id);
    todo.label = editTodo.label;
    todo.description = editTodo.description;
  },

  changeStateExecution(state, thatLabel) {
    const todo = findTodo(state.todos, (todo) => todo.label === thatLabel);
    todo.completed = !todo.completed;
  },

  addTodoToArchive(state, id) {
    state.todos.forEach((todo) => {
      if (todo._id === id) {
        todo.removed = true;
        state.todoTypes.forEach((type) => {
          if (type.label === state.currentType.label) {
            type.removed = true;
          }
        });
      }
    });
  },

  clearList(state) {
    state.todos.forEach((todo) => {
      todo.removed = true;
    });
  },

  changeCurrentType(state, newType) {
    localStorage.setItem("currentTypeTodo", JSON.stringify(newType));
    state.currentType = newType;
  },

  removeTodoType(state, typeName) {
    state.todoTypes.forEach((type) => {
      if (type.label === typeName) {
        type.fullRemoved = true;
        type.removed = true;

        sortTodos(state.todos).forEach((todo) => {
          todo.removed = true;
        });
      }
    });
  },

  removeTodoTypeFromList(state, typeName) {
    const index = indexOfByName(state.todos, typeName);
    state.todoTypes[index].removed = true;
  },

  deleteTodo(state, label) {
    state.todos.forEach((todo) => {
      if (todo.label === label) {
        todo.removed = true;
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
