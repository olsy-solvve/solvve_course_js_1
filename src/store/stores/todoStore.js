const state = {
  todos: [
    {
      label: "Home things",
      list: [
        {
          label: "Clean room",
          completed: false,
          discription: "And faster!",
        },
        {
          label: "Wash dishes",
          completed: true,
          discription: null,
        },
      ],
    },
    {
      label: "Work",
      list: [
        { label: "Progect", completed: true },
        { label: "Call to Sam", completed: false },
      ],
    },
    {
      label: "Study",
      list: [
        { label: "End lection", completed: false },
        { label: "Create design", completed: true },
      ],
    },
    {
      label: "Family",
      list: [
        { label: "Call to mam", completed: true },
        { label: "Buy a doll for Kristy", completed: true },
      ],
    },
    {
      label: "Anime list",
      list: [
        {
          label: "Death Note",
          completed: false,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        },
        {
          label: "Fairy Tale",
          completed: true,
          discription: "3rd season is out!",
        },
        { label: "Naruto", completed: false, discription: "Let`s just try..." },
      ],
    },
    {
      label: "Movies",
      list: [
        {
          label: "Black horse",
          completed: true,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        },
        {
          label: "Black",
          completed: false,
          discription: "3rd season is out!",
        },
        {
          label: "Green book",
          completed: false,
          discription: "Let`s just try...",
        },
      ],
    },
  ],
  currentType: "",
};

const getters = {
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

  addTodo(state, todo) {
    if (todo) {
      state.todos.forEach((todoType) => {
        if (todoType.label === state.currentType) {
          todoType.list.push(todo);
        }
      });
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
