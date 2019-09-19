// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'

import './assets/element-variables/index.css'

import 'swiper/dist/css/swiper.css'

import App from './App'
import router from './router'

import bus from './assets/js/bus.js'
import store from './vuex/store.js'

import axios from 'axios'

// store.dispatch('GET_USERLIST')

// import { GetAxios, PostAxios } from './assets/js/axios.js'

Vue.use(ElementUI)

Vue.prototype.bus = bus

Vue.prototype.$axios = axios

// Vue.prototype.$axios = {
//   get: GetAxios,
//   post: PostAxios
// }

Vue.config.productionTip = false

/* eslint-disable no-new */
const sVue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export default sVue
