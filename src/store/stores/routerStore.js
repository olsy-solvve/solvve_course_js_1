import routesName from "@/enums/routesName";

const state = {
  routes: [
    {
      label: "HOME",
      icon: "pi pi-home",
      to: { name: routesName.HOME },
    },
    {
      label: "TODO",
      icon: "pi pi-calendar-plus",
      to: { name: routesName.TODO },
      disabled: true,
    },
    {
      label: "ARCHIVE",
      icon: "pi pi-database",
      to: { name: routesName.ARCHIVE },
      disabled: true,
    },
    {
      label: "DOC",
      icon: "pi pi-file",
      to: { name: routesName.DOC },
    },
  ],
};

const getters = {
  getRoutes: (state) => {
    return state.routes;
  },
};
const actions = {};

const mutations = {
  disabledButtons(state) {
    state.routes.forEach((route) => {
      if (route.label === "TODO" || route.label === "ARCHIVE") {
        route.disabled = true;
      }
    });
  },
  enableButtons(state) {
    state.routes.forEach((route) => {
      if (route.label === "TODO" || route.label === "ARCHIVE") {
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
