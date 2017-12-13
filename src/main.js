import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
//import 'font-awesome/css/font-awesome.min.css'

//import vueResource from 'vue-resource'

import store from './store/index'

import axios from './config/axios/index'
import routes from './router.config'

//import message from './components/message/index'

import EpUI from './components/packages/index'
Vue.use(EpUI);

//Vue.prototype.$message = message;
Vue.prototype.$http = axios;

//Vue.use(ElementUI);
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
