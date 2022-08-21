// https://vuex.vuejs.org/

import { createStore } from "vuex";
import todoStore from "@/store/todo/todoStore.js";
import userStore from "@/store/user/userStore.js";

const store = createStore({
  modules: { todoStore, userStore },
});

export default store;
