import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

import jsonp from '@/util/jsonp'

import store from '@/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$jsonp = jsonp

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')