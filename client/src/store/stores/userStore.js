import { isEmptyObject } from "@/services/objectMethods.js";
import { someUserValidation } from "@/services/arrayMethods.js";

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
    return !isEmptyObject(state.currentUser);
  },
  isEmailExist: (state) => (email) => {
    return someUserValidation(state.users, ["email", email]);
  },
  isUserValid: (state) => (recieveUser) => {
    return someUserValidation(state.users, recieveUser);
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
  localStorageUser(context) {
    context.commit("routerStore/enableButtons", null, { root: true });
    context.commit("localStorageUser");
  },
};

const mutations = {
  login(state, user) {
    if (user) {
      state.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    }
  },
  logout(state) {
    state.currentUser = {};
    localStorage.removeItem("currentUser");
  },
  localStorageUser(state) {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));

    if (localUser) {
      state.currentUser = localUser;
    }
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
