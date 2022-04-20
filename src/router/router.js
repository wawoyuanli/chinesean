// const  VueRouter= require("vue-router");
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/homePage/homePage.vue"),
  },
  {
    path: "/about_us",
    name: "about_us",
    component: () => import("../views/aboutPage/aboutPage.vue"),
  },
  {
    path: "/publisher",
    name: "publisher",
    component: () => import("../views/publisherPage/publisherPage.vue"),
  },
  {
    path: "/advertiser",
    name: "advertiser",
    component: () => import("../views/advertiserPage/advertiserPage.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});
export default router;
