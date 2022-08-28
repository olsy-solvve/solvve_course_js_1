import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

const routes = store.getters["routerStore/getRoutesToRouter"];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
