import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BlankPage from "@/components/Pages/BlankPage/BlankPage.vue";
import Directory1 from "@/components/Pages/Directories/Directory1.vue";
import Directory2 from "@/components/Pages/Directories/Directory2.vue";
import Directory3 from "@/components/Pages/Directories/Directory3.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "blank",
    component: BlankPage,
  },
  {
    path: "/directory1",
    name: "directory1",
    component: Directory1
  },
  {
    path: "/directory2",
    name: "directory2",
    component: Directory2
  },
  {
    path: "/directory3",
    name: "directory3",
    component: Directory3
  },
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
