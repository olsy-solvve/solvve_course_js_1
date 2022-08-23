import { isEmptyObject } from "@/services/objectMethods.js";

const state = {
  users: [
    {
      id: 1,
      userName: "Mickey",
      email: "mouse@gmail.com",
      password: "1234",
    },
    {
      id: 2,
      userName: "Apolon",
      email: "god@gmail.com",
      password: "sungod",
    },
  ],
  currentUser: {},
};

const getters = {
  getUsers: (state) => {
    return state.users;
  },
  getUser: (state, id) => {
    return state.users.filters((u) => u.id === id);
  },
  getUserConfirmation: (state) => {
    return isEmptyObject(state.currentUser);
  },
};

const actions = {};

const mutations = {
  login: (state, user) => {
    console.log(user);
    if (user) {
      state.currentUser = user;
    }
  },
  logout: (state) => {
    state.currentUser = {};
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
