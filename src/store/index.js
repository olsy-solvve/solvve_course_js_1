// https://vuex.vuejs.org/

import { createStore } from "vuex";
import todoStore from "@/store/todo/todoStore.js";
import userStore from "@/store/user/userStore.js";
import popupStore from "@/store/popup/popupStore.js";
import routerStore from "@/store/router/routerStore.js";

const store = createStore({
  modules: { todoStore, userStore, popupStore, routerStore },
});

export default store;
