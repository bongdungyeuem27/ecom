import Header from "@/components/Header.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Shop from "@/views/Shop.vue";

import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "header",
      component: Header,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/shop",
          name: "shop",
          component: Shop,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    }
  ],
});

export default router;
