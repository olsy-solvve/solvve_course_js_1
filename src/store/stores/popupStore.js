import { indexOfByName } from "@/services/arrayMethods";

const state = {
  popups: [],
};

const getters = {
  getPopups: (state) => {
    return state.popups;
  },
};

const actions = {};

const mutations = {
  openDialog(state, popup) {
    const indexPopup = indexOfByName(state.popups, popup.name);
    if (indexPopup === -1) {
      state.popups.push(popup);
    }
  },
  closeDialog(state, namePopup) {
    const indexPopup = indexOfByName(state.popups, namePopup);
    if (indexPopup !== -1) {
      state.popups.splice(indexPopup, 1);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
