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
      } else {
        console.error(response.message);
      }
    },
    async getTask({ commit }, id) {
      const response = await APITask.getTask(id);
      if (response.success) {
        commit("GETONE", response.task);
      } else {
        console.error(response.message);
      }
    },
    async editTask({ commit }, data, id) {
      const response = await APITask.editTask(data, id);
      if (response.success) {
        // thong bao
        console.log(response.message);
      } else {
        console.error(response.message);
      }
    },
    async deleteTask({ commit }, id) {
      const response = await APITask.deleteTask(id);
      if (response.success) {
        // thong bao
        console.log(response.message);
      } else {
        console.error(response.message);
      }
    },
    async postTask({ commit }, data) {
      const response = await APITask.postTask(data);
      if (response.success) {
        // thong bao
        console.log(response.message);
      } else {
        console.error(response.message);
      }
    },
  },
};

export default taskStore;
