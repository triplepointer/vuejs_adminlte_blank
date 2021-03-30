import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BlankPage from "@/components/Pages/BlankPage/BlankPage.vue";
import Directory1 from "@/components/Pages/Directories/Directory1.vue";
import Directory2 from "@/components/Pages/Directories/Directory2.vue";
import Directory3 from "@/components/Pages/Directories/Directory3.vue";

Vue.config.productionTip = false;

import $ from "@/assets/scripts/directory1/jquery.module.js";

window.$ = window.jQuery = $;

if(window.jQuery && window.$) { 
  const BootstrapBundleFunction = require("@/assets/scripts/directory1/bootstrap.bundle.module.js");
  const DataTable = require("@/assets/scripts/directory1/jquery.dataTables.module.js");
  const dataTablesBootstrap4Function = require("@/assets/scripts/directory1/dataTables.bootstrap4.module.js");
  const dataTablesRespFunction = require("@/assets/scripts/directory1/dataTables.responsive.module.js");
  const respBootstrap4Function = require("@/assets/scripts/directory1/responsive.bootstrap4.module.js");
  const dataTablesButtonsFunction = require("@/assets/scripts/directory1/dataTables.buttons.module.js");
  const bootstrapButtonsFunction = require("@/assets/scripts/directory1/buttons.bootstrap4.module.js");
  const jszipFunction = require("@/assets/scripts/directory1/jszip.module.js");
  const pdfmakeFunction = require("@/assets/scripts/directory1/pdfmake.module.js");
  const vfsFontsFunction = require("@/assets/scripts/directory1/vfs_fonts.module.js");
  const buttonsHTML5Function = require("@/assets/scripts/directory1/buttons.html5.module.js");
  const buttonsPrintFunction = require("@/assets/scripts/directory1/buttons.print.module.js");
  const colVisButtonsFunction = require("@/assets/scripts/directory1/buttons.colVis.module.js");
  const AdminLTEAppFunction = require("@/assets/scripts/directory1/adminlte.module.js");
}

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
