// https://vuex.vuejs.org/

import { createStore } from "vuex";
import todoStore from "@/store/stores/todoStore.js";
import userStore from "@/store/stores/userStore.js";
import popupStore from "@/store/stores/popupStore.js";
import routerStore from "@/store/stores/routerStore.js";

const store = createStore({
  modules: { todoStore, userStore, popupStore, routerStore },
});

export default store;
