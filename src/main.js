import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueResource from "vue-resource";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
