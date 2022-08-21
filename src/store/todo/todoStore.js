const state = {
  todo: ["Hello world", "charly"],
};

const getters = {
  getTodos: (state) => {
    return state.todo;
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
