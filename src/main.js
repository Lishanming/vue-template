import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//import 'font-awesome/css/font-awesome.min.css'



import store from './store/index'

import axios from './config/axios'
import router from './config/router'

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
