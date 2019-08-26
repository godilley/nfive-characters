import Vue from 'vue'
import App from "./App";
import store from './store'
import VueRouter from "vue-router"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free"
import "@fortawesome/fontawesome-free/css/all.css"

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
