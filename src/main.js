// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
require("./mock/index");
import HighchartsVue from "highcharts-vue";
import axios from "axios";
// import Idb from "idb-js";
Vue.use(HighchartsVue);
Vue.use(ElementUI);
// Vue.use(Axios);
Vue.prototype.$axios = axios;
// Vue.prototype.$bloginfoDB = Idb;
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
