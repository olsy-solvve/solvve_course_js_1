import {
  indexOfById,
  getTodosType,
  sortTodos,
  findTodosByType,
  findTodo,
} from "@/services/arrayMethods";

const state = {
  todos: [
    {
      label: "Home things",
      removed: false,
      fullRemoved: false,
      list: [
        {
          id: 1,
          removed: true,
          label: "Clean room",
          completed: false,
          discription: "And faster!",
        },
        {
          id: 2,
          removed: false,
          label: "Wash dishes",
          completed: true,
          discription: null,
        },
      ],
    },
    {
      label: "Work",
      removed: true,
      fullRemoved: false,
      list: [
        {
          id: 1,
          label: "Progect",
          removed: false,
          completed: true,
        },
        { id: 2, removed: false, label: "Call to Sam", completed: false },
      ],
    },
    {
      label: "Study",
      removed: false,
      fullRemoved: false,
      list: [
        { id: 1, removed: false, label: "End lection", completed: false },
        { id: 2, removed: false, label: "Create design", completed: true },
      ],
    },
    {
      label: "Family",
      removed: false,
      fullRemoved: false,
      list: [
        { id: 1, removed: false, label: "Call to mam", completed: true },
        {
          id: 2,
          removed: false,
          label: "Buy a doll for Kristy",
          completed: true,
        },
      ],
    },
    {
      label: "Anime list",
      removed: true,
      fullRemoved: false,
      list: [
        {
          id: 1,
          label: "Death Note",
          completed: false,
          removed: true,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        },
        {
          id: 2,
          label: "Fairy Tale",
          completed: true,
          removed: true,
          discription: "3rd season is out!",
        },
        {
          id: 3,
          label: "Naruto",
          removed: false,
          completed: false,
          discription: "Let`s just try...",
        },
      ],
    },
    {
      label: "Movies",
      removed: false,
      fullRemoved: false,
      list: [
        {
          id: 1,
          label: "Black horse",
          completed: true,
          removed: false,
          discription: "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        },
        {
          id: 2,
          label: "Black",
          completed: false,
          removed: false,
          discription: "3rd season is out!",
        },
        {
          id: 3,
          label: "Green book",
          completed: false,
          removed: false,
          discription: "Let`s just try...",
        },
      ],
    },
  ],
  currentType: "Home things",
};

const getters = {
  getTodosTypes: (state) => {
    return getTodosType(state.todos);
  },

  getTodos: (state) => {
    return sortTodos(state.todos, state.currentType);
  },

  getTodosProgress: (state) => {
    const todoList = sortTodos(state.todos, state.currentType);
    return todoList.filter((todo) => !todo.completed);
  },

  getTodosCompleted: (state) => {
    const todoList = sortTodos(state.todos, state.currentType);
    return todoList.filter((todo) => todo.completed);
  },

  getRemovedType: (state) => {
    return getTodosType(state.todos, true);
  },

  getRemovedTodos: (state) => {
    return sortTodos(state.todos, state.currentType, true);
  },
};

const actions = {};

const mutations = {
  addTodo(state, todo) {
    if (todo) {
      const todoByType = findTodosByType(state.todos, state.currentType);
      todo.id = todoByType.list.length;
      todo.removed = false;
      todoByType.list.push(todo);
    }
  },

  editTodo(state, editTodo) {
    if (editTodo) {
      const todoByType = findTodosByType(state.todos, state.currentType);
      const todo = findTodo(todoByType.list, (todo) => todo.id === editTodo.id);
      todo.label = editTodo.label;
      todo.discription = editTodo.discription;
    }
  },

  changeStateExecution(state, thatLabel) {
    const todoByType = findTodosByType(state.todos, state.currentType);
    const todo = findTodo(todoByType.list, (todo) => todo.label === thatLabel);
    todo.completed = !todo.completed;
  },

  removeTodo(state, id) {
    const todoByType = findTodosByType(state.todos, state.currentType);
    const index = indexOfById(todoByType.list, id);
    todoByType.list.splice(index, 1);
  },

  clearList(state) {
    const todoByType = findTodosByType(state.todos, state.currentType);
    todoByType.list.forEach((todo) => {
      todo.removed = true;
    });
  },

  addTodoType(state, typeName) {
    if (typeName) {
      state.todos.push(typeName);
    }
  },

  changeCurrentType(state, newType) {
    state.currentType = newType;
  },

  removeTodoType(state, typeName) {
    const todoByType = findTodosByType(state.todos, typeName);
    todoByType.removed = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
