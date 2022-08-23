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
    const indexPopup = indexOfPopupName(state.popups, popup.name);
    if (indexPopup === -1) {
      state.popups.push(popup);
    }
  },
  closeDialog(state, namePopup) {
    const indexPopup = indexOfPopupName(state.popups, namePopup);
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

function indexOfPopupName(popups, name) {
  let target = -1;
  popups.forEach((popup, index) => {
    if (popup.name === name) {
      target = index;
    }
  });
  return target;
}
