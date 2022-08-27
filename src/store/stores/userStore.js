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
  needToLogin: true,

  isUserMailInSystem: false, // check that mail if field in store
  isUserDataValid: false, // validation  mail and password for authorization \
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
  getLoginStatus: (state) => {
    return state.needToLogin;
  },
  isUserMailInSystem: (state) => {
    return state.isUserMailInSystem;
  },
  isUserDataValidToAuthorization: (state) => {
    return state.isUserDataValid;
  },
};

const actions = {};

const mutations = {
  login: (state, user) => {
    if (user) {
      state.currentUser = user;
    }
  },
  logout: (state) => {
    state.currentUser = {};
  },
  registration: (state, user) => {
    user.id = state.users.length + 1;
    state.users.push(user);
  },
  signIn: (state) => {
    state.needToLogin = true;
  },
  signUp: (state) => {
    state.needToLogin = false;
  },
  // проверка что пользователь с такой почтой уже есть в системе
  isMailInSystem: (state, mail) => {
    state.users.forEach((user) => {
      if (mail === user.email) {
        state.isUserMailInSystem = true;
      } else {
        state.isUserMailInSystem = false;
      }
    });
  },
  isDataValid: (state, mail, pass, login) => {
    state.users.forEach((user) => {
      if (
        user.email === mail ||
        user.password === pass ||
        user.userName === login
      ) {
        state.isUserDataValid = true;
      } else {
        state.isUserDataValid = false;
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
