import Vue from 'vue'
import App from './App.vue'
import './static/reset.css'


import http from './api/http'
(Vue as any).$http = http

import store from './store/index'
(Vue as any).$store = store

import uView from "uview-ui";  //  使用时要在sfc.d.ts中配置
Vue.use(uView);

Vue.config.productionTip = false

new App().$mount()
