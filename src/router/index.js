import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/index.vue'
import Home from '@/components/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

// 路由导航守卫
/**
 * to 将要访问的路径  
 * from  来源路由
 * next function  放行函数
 */
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.localStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router