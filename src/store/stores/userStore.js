import { isEmptyObject } from "@/services/objectMethods.js";
import router from "@/plugins/router";

import routesName from "@/enums/routesName";

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
    context.commit("login", user);
    context.commit("routerStore/enableButtons", null, { root: true });
  },
  logout: (context) => {
    context.commit("logout");
    context.commit("routerStore/disabledButtons", null, { root: true });
  },
};

const mutations = {
  login(state, user) {
    if (user) {
      state.currentUser = user;
    }
  },
  logout(state) {
    state.currentUser = {};
    router.push({ name: routesName.HOME });
  },
  registration: (state, user) => {
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
