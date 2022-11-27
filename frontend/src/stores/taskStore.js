import APITask from "../services/APITask";

const taskStore = {
  state: () => ({
    tasks: [],
    task: {},
  }),
  mutations: {
    GETALL(state, tasks) {
      state.tasks = tasks;
    },
    GETONE(state, task) {
      state.task = task;
    },
  },
  actions: {
    async getTasks({ commit }) {
      const response = await APITask.getTasks();

      if (response.success) {
        commit("GETALL", response.tasks);
      }
    },
    async getTask({ commit, dispatch }, id) {
      const response = await APITask.getTask(id);
      if (response.success) {
        commit("GETONE", response.task);
      }
      dispatch("activeToast", response);
    },
    async editTask({ dispatch }, data) {
      const response = await APITask.editTask(data.values, data.id);
      await dispatch("getTasks");
      dispatch("activeToast", response);
    },
    async deleteTask({ dispatch }, id) {
      const response = await APITask.deleteTask(id);
      await dispatch("getTasks");
      dispatch("activeToast", response);
    },
    async postTask({ dispatch }, data) {
      const response = await APITask.postTask(data);
      await dispatch("getTasks");
      dispatch("activeToast", response);
    },
  },
};

export default taskStore;
