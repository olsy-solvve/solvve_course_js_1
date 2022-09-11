import { isEmptyObject } from "@/services/objectMethods.js";
import apiService from "@/services/apiService.js";
import apiOptions from "@/enums/apiOptions.js";

const state = {
  currentUser: {},
};

const getters = {
  getUserConfirmation: (state) => {
    return !isEmptyObject(state.currentUser);
  },
};

const actions = {
  login: (context, user) => {
    return apiService
      .post(`${apiOptions.URL_SERVER}/login`, user)
      .then((res) => {
        const targetUser = res.data;

        if (targetUser.message) {
          return { message: targetUser.message, valid: false };
        }

        if (targetUser.access_token) {
          context.commit("setCurrentUser", targetUser);
          context.commit("routerStore/enableButtons", null, { root: true });
          return { valid: true };
        }
      });
  },
  logout: (context) => {
    context.commit("removeCurrentUser");
    context.commit("routerStore/disabledButtons", null, { root: true });
  },
  registration(context, user) {
    return apiService
      .post(`${apiOptions.URL_SERVER}/registration`, user)
      .then((res) => {
        const targetUser = res.data;

        if (targetUser.email_not_valid) {
          return { message: targetUser.email_not_valid, valid: false };
        }

        if (targetUser.email_exist) {
          return { message: targetUser.email_exist, valid: false };
        }

        if (targetUser.user) {
          return { valid: true };
        }
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
