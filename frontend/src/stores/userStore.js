import APIUser from "../services/APIUser";

const userStore = {
  state: () => ({
    user: {},
    isLogged: localStorage.getItem("token") ? true : false,
  }),
  mutations: {
    REGISTER(state) {
      state.isLogged = true;
    },
    LOGIN(state) {
      state.isLogged = true;
    },
    SETUSER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.user = {};
      state.isLogged = false;
    },
  },
  actions: {
    async getUser({ commit }) {
      const response = await APIUser.getUser();
      if (response.success) {
        commit("SETUSER", response.user);
      }
    },
    async register({ commit, dispatch }, data) {
      const response = await APIUser.register(data);
      dispatch("activeToast", response);
      if (response.success) {
        localStorage.setItem("token", response.token);
        commit("REGISTER");
        return response.success;
      }
    },
    async login({ commit, dispatch }, data) {
      const response = await APIUser.login(data);
      dispatch("activeToast", response);
      if (response.success) {
        localStorage.setItem("token", response.token);
        commit("LOGIN");
        return response.success;
      }
    },
    logout({ commit, dispatch }) {
      localStorage.removeItem("token");
      commit("LOGOUT");
      dispatch("activeToast", {
        success: true,
        message: "Đăng xuất thành công!",
      });
    },
  },
};

export default userStore;
