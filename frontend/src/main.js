import { createApp } from "vue";
import App from "./App.vue";
import Router from "../src/router/index";

import "../src/style.css";
createApp(App).use(Router).mount("#app");
