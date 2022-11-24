import { createStore } from "vuex";
import userStore from "./userStore";
export default createStore({
  modules: {
    user: userStore,
  },
});
