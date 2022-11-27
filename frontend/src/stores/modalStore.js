const modalStore = {
  state: () => ({
    isShowModal: false,
  }),
  mutations: {
    SETSHOWMODAL(state) {
      state.isShowModal = true;
    },
    SETHIDEMODAL(state) {
      state.isShowModal = false;
    },
  },
  actions: {
    showModal({ commit }) {
      commit("SETSHOWMODAL");
    },
    hideModal({ commit }) {
      commit("SETHIDEMODAL");
    },
  },
};

export default modalStore;
