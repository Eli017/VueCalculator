import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});

export default router;
