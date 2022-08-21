const state = {
  users: [
    {
      id: 1,
      userName: "Mickey",
      email: "mouse@gmail.com",
      password: "1234",
    },
    {
      id: 2,
      userName: "Apolon",
      email: "god@gmail.com",
      password: "sungod",
    },
  ],
  currentUser: null,
};

const getters = {
  getUsers: (state) => {
    return state.users;
  },
  getUser: (state, id) => {
    return state.users.filters((u) => u.id === id);
  },
  getUserConfirmation: (state) => {
    return state.currentUser ? true : false;
  },
};

const actions = {};

const mutations = {
  login: (state, user) => {
    console.log(user);
    if (user) {
      state.currentUser = user;
    }
  },
  logout: (state) => {
    state.currentUser = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
