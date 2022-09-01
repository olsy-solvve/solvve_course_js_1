import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";
import routesName from "@/enums/routesName";

const routes = store.getters["routerStore/getRoutesToRouter"];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserConfirmation = store.getters["userStore/getUserConfirmation"];

  if (
    (to.name === routesName.TODO || to.name === routesName.ARCHIVE) &&
    !isUserConfirmation
  ) {
    next({ name: routesName.HOME });
  } else {
    next();
  }
});
export default router;
