import routesName from "@/enums/routesName";


const state = {
  routes: [
    {
      path: "/",
      name: routesName.HOME,
      icon: "pi pi-home",
      component: () => import("@/features/HomeFeature.vue"),
      to: { name: routesName.HOME },
    },
    {
      path: "/todo",
      name: routesName.TODO,
      icon: "pi pi-calendar-plus",
      component: () => import("@/features/TodoListFeature.vue"),
      to: { name: routesName.TODO },
      disabled: true,
    },
    {
      path: "/archive",
      name: routesName.ARCHIVE,
      icon: "pi pi-database",
      component: () => import("@/features/ArchiveFeature.vue"),
      to: { name: routesName.ARCHIVE },
      disabled: true,
    },
    {
      path: "/doc",
      name: routesName.DOC,
      icon: "pi pi-file",
      component: () => import("@/features/DocFeature.vue"),
      to: { name: routesName.DOC },
    },
    {
      path: "/auth",
      name: routesName.AUTH,
      component: () => import("@/features/AuthFeature.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: routesName.NOT_FOUND,
      component: () => import("@/features/NotFoundFeature.vue"),
    },
  ],
};

const getters = {
  getRoutesToRouter: (state) => {
    const routes = [];

    state.routes.forEach((route) => {
      routes.push({
        path: route.path,
        name: route.name,
        component: route.component,
      });
    });

    return routes;
  },
  getRoutesToHeader: (state) => {
    const routes = [];

    state.routes.forEach((route, index) => {
      if (index > 3) {
        return;
      }
      routes.push({
        label: route.name.toUpperCase(),
        icon: route.icon,
        to: route.to,
        disabled: route.disabled,
      });
    });

    return routes;
  },
};
const actions = {};

const mutations = {
  disabledButtons(state) {
    state.routes.forEach((route) => {
      if (route.name === routesName.TODO || route.name === routesName.ARCHIVE) {
        route.disabled = true;
      }
    });
  },
  enableButtons(state) {
    state.routes.forEach((route) => {
      if (route.name === routesName.TODO || route.name === routesName.ARCHIVE) {
        route.disabled = false;
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
