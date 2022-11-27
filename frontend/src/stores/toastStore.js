const toastStore = {
  state: () => ({
    isShowToast: false,
    message: "",
    success: true,
  }),
  mutations: {
    SETSHOWTOAST(state, data) {
      state.isShowToast = true;
      state.message = data.message;
      state.success = data.success;
    },
    SETHIDETOAST(state) {
      state.isShowToast = false;
      state.message = "";
    },
  },
  actions: {
    activeToast({ commit }, data) {
      commit("SETSHOWTOAST", data);
      setTimeout(() => {
        commit("SETHIDETOAST");
      }, 3000);
    },
    unActiveToast({ commit }) {
      commit("SETHIDETOAST");
    },
  },
};

export default toastStore;
