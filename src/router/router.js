import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home_index",
  },
  {
    path: "/home_index",
    name: "home_index",
    component: () => import("../views/homePage/homePage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/loginPage/loginPage.vue"),
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
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/blogPage/blogPage.vue"),
  },
  {
    path: "/contact_us",
    name: "contact_us",
    component: () => import("../views/contactPage/contactPage.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/faqPage/faqPage.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});
export default router;
