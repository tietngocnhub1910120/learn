import { createStore } from "vuex";
import userStore from "./userStore";
import taskStore from "./taskStore";
export default createStore({
  modules: {
    user: userStore,
    task: taskStore,
  },
});
