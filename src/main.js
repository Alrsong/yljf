'use strict';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import '@/component/component.js'

import '@/css/base.css'
import '@/css/style.css'
import '@/css/swiper.min.css'


Vue.config.productionTip = false;
Vue.prototype.axios = axios; 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

