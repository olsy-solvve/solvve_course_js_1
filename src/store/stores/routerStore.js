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

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
