const state = {
  todo: [
    {
      label: "Home things",
      list: [
        {
          label: "Clean room",
          disription: "And faster!",
        },
        {
          label: "Wash dishes",
          discription: null,
        },
      ],
    },
    {
      label: "Work",
      list: [{ label: "Progect" }, { label: "Call to Sam" }],
    },
    {
      label: "Univercity",
      list: [{ label: "End lection" }, { label: "Create design" }],
    },
    {
      label: "Family",
      list: [{ label: "Call to mam" }, { label: "Buy a doll for Kristy" }],
    },
    {
      label: "Anime list",
      list: [
        {
          label: "Death Note",
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        },
        { label: "Fairy Tale", discription: "3rd season is out!" },
        { label: "Naruto", discription: "Let`s just try..." },
      ],
    },
  ],
};

const getters = {
  getTodos: (state) => {
    return state.todo;
  },
  getListLength: (state) => {
    return state.todo.length;
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
