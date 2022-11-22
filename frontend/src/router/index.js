import { createRouter, createWebHistory } from "vue-router";
import ViewLogin from "@/views/ViewLogin.vue";
import ViewRegister from "@/views/ViewRegister.vue";
import ViewNotFound from "@/views/ViewNotFound.vue";
import ViewHome from "@/views/ViewHome.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", component: ViewLogin, name: "Login" },
    { path: "/", redirect: "/login" },
    { path: "/register", component: ViewRegister, name: "Register" },
    { path: "/home", component: ViewHome, name: "Home" },
    { path: "/:pathMatch(.*)*", component: ViewNotFound, name: "NotFound" },
  ],
});

export default router;
