import { indexOfById } from "@/services/arrayMethods";

const state = {
  todos: [
    {
      label: "Home things",
      removed: true,
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
      removed: false,
      fullRemoved: false,
      list: [
        {
          id: 1, label: "Progect",
          removed: false,
          completed: true
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
        { id: 2, removed: false, label: "Buy a doll for Kristy", completed: true },
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
          discription:
            "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
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
  currentType: "",
};

const getters = {
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
    let todoList = [];
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

  getTodosType: (state) => {
    return state.todos;
  },

  getTodos: (state) => {
    let todoList = [];
    state.todos.forEach((todo) => {
      if (todo.label === state.currentType) {
        todoList = todo.list;
      }
    });
    return todoList;
  },

  getTodosProgress: () => {
    let todoList = [];
    state.todos.forEach((todo) => {
      if (todo.label === state.currentType) {
        todoList = todo.list;
      }
    });
    return todoList.filter((todo) => !todo.completed);
  },

  getTodosCompleted: () => {
    let todoList = [];
    state.todos.forEach((todo) => {
      if (todo.label === state.currentType) {
        todoList = todo.list;
      }
    });

    return todoList.filter((todo) => todo.completed);
  },
};
const actions = {};

const mutations = {
  changeFilter(state, thatLabel) {
    state.todos.forEach((type) => {
      if (type.label === state.currentType) {
        type.list.forEach((item) => {
          item.label === thatLabel ? (item.completed = !item.completed) : 0;
        });
      }
    });
  },

  changeCurrentType(state, newType) {
    state.currentType = newType;
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

  removeTodo(state, id) {
    state.todos.forEach((todoType) => {
      if (todoType.label === state.currentType) {
        const index = indexOfById(todoType.list, id);
        todoType.list.splice(index, 1);
      }
    });
  },

  addTodoType(state, todoType) {
    if (todoType) {
      state.todos.push(todoType);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
