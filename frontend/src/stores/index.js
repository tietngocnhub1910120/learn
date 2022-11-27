import { createStore } from "vuex";
import userStore from "./userStore";
import taskStore from "./taskStore";
import modalStore from "./modalStore";
import toastStore from "./toastStore";
export default createStore({
  modules: {
    user: userStore,
    task: taskStore,
    modal: modalStore,
    toast: toastStore,
  },
});
