import { createWebHistory, createRouter } from "vue-router";

import HomeFeature from "@/features/HomeFeature.vue";
import routesName from "@/enums/routesName.js";

const routes = [
  { path: "/", name: routesName.HOME, component: HomeFeature },
  {
    path: "/todo",
    name: routesName.TODO,
    component: () => import("@/features/TodoListFeature.vue"),
  },
  {
    path: "/archive",
    name: routesName.ARCHIVE,
    component: () => import("@/features/ArchiveFeature.vue"),
  },
  {
    path: "/doc",
    name: routesName.DOC,
    component: () => import("@/features/DocFeature.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
