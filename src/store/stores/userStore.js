import { isEmptyObject } from "@/services/objectMethods.js";

const state = {
  users: [
    {
      id: 1,
      username: "Mickey",
      email: "mouse@gmail.com",
      password: "1234",
    },
    {
      id: 2,
      username: "Apolon",
      email: "god@gmail.com",
      password: "sungod",
    },
  ],
  currentUser: {},
};

const getters = {
  getUserConfirmation: (state) => {
    return isEmptyObject(state.currentUser);
  },
  isEmailExist: (state) => (email) => {
    console.log(state.users.some((user) => user.email === email));
    return state.users.some((user) => user.email === email);
  },
  isUserValid: (state) => (recieveUser) => {
    return state.users.some(
      (user) =>
        user.email === recieveUser.email &&
        user.password === recieveUser.password
    );
  },
};

const actions = {
  login: (context, user) => {
    console.log(user);

    if (user) {
      state.currentUser = user;
      context.commit("routerStore/enableButtons");
    }
  },
  logout: (context) => {
    state.currentUser = {};
    context.commit("routerStore/disabledButtons");
  },
};

const mutations = {
  registration: (state, user) => {
    console.log(user);
    user.id = state.users.length + 1;
    state.users.push(user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
