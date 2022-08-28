import { indexOfById, sortTodo } from "@/services/arrayMethods";

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
    let typeList = [];
    state.todos.forEach((todo) => {
      if (todo.removed !== true) {
        typeList.push(todo);
      }
    });
    return typeList;
  },

  getTodos: (state) => {
    return sortTodo(state.todos, state.currentType);
  },

  getTodosProgress: (state) => {
    const todoList = sortTodo(state.todos, state.currentType);
    return todoList.filter((todo) => !todo.completed);
  },

  getTodosCompleted: (state) => {
    const todoList = sortTodo(state.todos, state.currentType);
    return todoList.filter((todo) => todo.completed);
  },

  getRemovedType: (state) => {
    const type = [];
    state.todos.forEach((todoType) => {
      if (todoType.removed === true) {
        type.push(todoType);
      }
    });
    return type;
  },

  getRemovedTodos: (state) => {
    const todoList = [];
    state.todos.forEach((todoType) => {
      if (todoType.label === state.currentType) {
        todoType.list.forEach((todo) => {
          if (todo.removed === true) {
            todoList.push(todo);
          }
        });
      }
    });
    return todoList;
  },
};

const actions = {};

const mutations = {
  addTodo(state, todo) {
    if (todo) {
      state.todos.forEach((todoType) => {
        if (todoType.label === state.currentType) {
          todo.id = todoType.list.length;
          todo.removed = false;
          todoType.list.push(todo);
        }
      });
    }
  },

  editTodo(state, editTodo) {
    if (editTodo) {
      state.todos.forEach((todoType) => {
        if (todoType.label === state.currentType) {
          todoType.list.forEach((todo) => {
            if (todo.id === editTodo.id) {
              todo.label = editTodo.label;
              todo.discription = editTodo.discription;
            }
          });
        }
      });
    }
  },

  changeStateExecution(state, thatLabel) {
    state.todos.forEach((type) => {
      if (type.label === state.currentType) {
        type.list.forEach((item) => {
          item.label === thatLabel ? (item.completed = !item.completed) : 0;
        });
      }
    });
  },

  removeTodo(state, id) {
    state.todos.forEach((todoType) => {
      if (todoType.label === state.currentType) {
        const index = indexOfById(todoType.list, id);
        todoType.list.splice(index, 1);
      }
    });
  },

  clearList(state) {
    state.todos.forEach((todoType) => {
      if (todoType.label === state.currentType) {
        todoType.list.forEach((todo) => {
          todo.removed = true;
        });
        console.log(todoType.list);
      }
    });
  },

  addTodoType(state, typeName) {
    if (typeName) {
      state.todos.push(typeName);
    }
  },

  changeCurrentType(state, newType) {
    console.log(newType);
    state.currentType = newType;
  },

  removeTodoType(state, typeName) {
    state.todos.forEach((todoType) => {
      if (todoType.label === typeName) {
        todoType.removed = true;
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
