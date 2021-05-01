import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: "/portfolio/:id",
    name: "example",
    component: () => import('../views/Example.vue')
  },
  {
    path: "/service",
    name: "service",
    component: () => import('../views/Service.vue')
  },
 
  {
    path: "/contact",
    name: "contact",
    component: () => import('../views/Contact.vue')
  },
  {
    path: "/about",
    name: "about",
    component: () => import('../views/About.vue')
  },
  { path: '*', component: Home }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: 'navbar-list__link-active',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0}
  }
});


export default router;
