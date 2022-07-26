import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'
import '@/plugins/elements'
import axios from 'axios'

Vue.config.productionTip = false


axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 获取token
const token = window.sessionStorage.getItem('token')
// 请求拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = token
  return config
})
// 响应拦截器
axios.interceptors.response.use(res => res.data)

Vue.prototype.$axios = axios



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
