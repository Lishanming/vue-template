import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
//import vueResource from 'vue-resource'

import store from './store/index'

import axios from './config/axios/index'
import routes from './router.config'

Vue.prototype.$http = axios;

Vue.use(vueRouter);
//Vue.use(vueResource);

const router = new vueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
