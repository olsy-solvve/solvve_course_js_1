import { createStore } from "vuex";
import todoStore from "@/store/todo/todoStore";

const store = createStore({
  modules: { todoStore },
});

export default store;
