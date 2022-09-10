import { isEmptyObject } from "@/services/objectMethods.js";
// import { someUserValidation } from "@/services/arrayMethods.js";
import apiService from "@/services/apiService.js";
import apiOptions from "@/enums/apiOptions.js";

const state = {
  currentUser: {},
};

const getters = {
  getUserConfirmation: (state) => {
    return !isEmptyObject(state.currentUser);
  },
  // isUserValid: (state) => (recieveUser) => {
  //   return someUserValidation(state.users, recieveUser);
  // },
};

const actions = {
  login: (context, user) => {
    apiService.post(apiOptions.URL_SERVER + "/login", user).then((res) => {
      const targetUser = res.data;
      if (targetUser) {
        context.commit("setCurrentUser", targetUser);
        context.commit("routerStore/enableButtons", null, { root: true });
      }
    });
  },
  logout: (context) => {
    context.commit("removeCurrentUser");
    context.commit("routerStore/disabledButtons", null, { root: true });
  },
  registration(context, user) {
    apiService
      .post(apiOptions.URL_SERVER + "/registration", user)
      .then((res) => {
        console.log(res);
      });
  },
};

const mutations = {
  setCurrentUser: (state, user) => {
    state.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
  },
  removeCurrentUser: (state) => {
    state.currentUser = {};
    localStorage.removeItem("currentUser");
  },
  setUserFromLocalStorage(state) {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));

    if (localUser) {
      state.currentUser = localUser;
      this.commit("routerStore/enableButtons", null, { root: true });
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
