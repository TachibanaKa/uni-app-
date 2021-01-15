import Vue from 'vue'
import App from './App.vue'
import './static/reset.css'

import http from './api/http'
(Vue as any).$http = http

import store from './store/index'
(Vue as any).$store = store

Vue.config.productionTip = false

new App().$mount()
