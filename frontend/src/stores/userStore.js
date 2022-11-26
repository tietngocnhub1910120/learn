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
      } else {
        console.error(response.message);
      }
    },
    async register({ commit }, data) {
      const response = await APIUser.register(data);
      if (response.success) {
        localStorage.setItem("token", response.token);
        commit("REGISTER");
        return response.success;
      } else {
        console.error(response.message);
      }
    },
    async login({ commit }, data) {
      const response = await APIUser.login(data);
      if (response.success) {
        localStorage.setItem("token", response.token);
        commit("LOGIN");
        return response.success;
      } else {
        console.error(response.message);
      }
    },
  },
};

export default userStore;
