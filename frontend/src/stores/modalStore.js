const modalStore = {
  state: () => ({
    isShowModal: false,
    isDelete: false,
  }),
  mutations: {
    SETSHOWMODAL(state) {
      state.isShowModal = true;
    },
    SETSHOWMODALDELETE(state) {
      state.isShowModal = true;
      state.isDelete = true;
    },
    SETHIDEMODAL(state) {
      state.isShowModal = false;
      state.isDelete = false;
    },
  },
  actions: {
    showModal({ commit }) {
      commit("SETSHOWMODAL");
    },
    showModalDelete({ commit }) {
      commit("SETSHOWMODALDELETE");
    },
    hideModal({ commit }) {
      commit("SETHIDEMODAL");
    },
  },
};

export default modalStore;
