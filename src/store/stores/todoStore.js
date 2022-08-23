import todoTypes from "@/enums/todoTypes.js";

const state = {
  todos: [
    {
      label: todoTypes.HOME,
      list: [
        {
          label: "Clean room",
          disription: "And faster!",
        },
        {
          label: "Wash dishes",
          discription: null,
        },
      ],
    },
    {
      label: todoTypes.WORK,
      list: [{ label: "Progect" }, { label: "Call to Sam" }],
    },
    {
      label: todoTypes.UNIVERCITY,
      list: [{ label: "End lection" }, { label: "Create design" }],
    },
    {
      label: todoTypes.FAMILY,
      list: [{ label: "Call to mam" }, { label: "Buy a doll for Kristy" }],
    },
    {
      label: todoTypes.ANIMAL,
      list: [
        {
          label: "Death Note",
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        },
        { label: "Fairy Tale", discription: "3rd season is out!" },
        { label: "Naruto", discription: "Let`s just try..." },
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
