import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
const routerHistory = createWebHistory();

//eslint-disable-next-line
const routes = <Array<any>>[
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: routerHistory,
  routes: routes
});

export default router;
