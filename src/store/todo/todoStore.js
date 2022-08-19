export default {
  namespaced: true,
  actions: {},
  mutations: {},
  state: () => ({
    todo: ["Hello world", "charly"],
  }),
  getters: {
    getTodos: (state) => {
      return state.todo;
    },
  },
};
