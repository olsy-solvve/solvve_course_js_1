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
  {
    path: "/:pathMatch(.*)*",
    name: routesName.NOT_FOUND,
    component: () => import("@/features/NotFoundFeature.vue"),
  },
  {
    path: "/about",
    name: routesName.ABOUT,
    component: () => import("@/features/AboutFeature.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
