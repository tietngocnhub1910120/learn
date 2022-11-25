import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import Store from "./stores";

import "../src/style.css";

createApp(App).use(Router).use(Store).mount("#app");
