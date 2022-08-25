import todoTypes from "@/enums/todoTypes.js";

const state = {
  todos: [
    {
      label: todoTypes.HOME,
      list: [
        {
          label: "Clean room",
          completed: true,
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
      label: todoTypes.WORK,
      list: [
        { label: "Progect", completed: true },
        { label: "Call to Sam", completed: true },
      ],
    },
    {
      label: todoTypes.UNIVERCITY,
      list: [
        { label: "End lection", completed: true },
        { label: "Create design", completed: true },
      ],
    },
    {
      label: todoTypes.FAMILY,
      list: [
        { label: "Call to mam", completed: true },
        { label: "Buy a doll for Kristy", completed: true },
      ],
    },
    {
      label: todoTypes.ANIMAL,
      list: [
        {
          label: "Death Note",
          completed: true,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        },
        {
          label: "Fairy Tale",
          completed: true,
          discription: "3rd season is out!",
        },
        { label: "Naruto", completed: true, discription: "Let`s just try..." },
      ],
    },
  ],
  currentType: todoTypes.HOME,
};

const getters = {
  getTodos: (state) => {
    return state.todos;
  },
  getListLength: (state) => {
    return state.todos.length;
  },
};
const actions = {};

const mutations = {
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
