import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout'),
    meta: { title: '首页'}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: { title: 'login'}
  }
]

const router = new VueRouter({
  routes
})

// 使用钩子函数对路由进行权限跳转
router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start()
  // 页面title
  document.title = to.meta.title
  
  const role = localStorage.getItem('ms_username')

  if (!role && to.path !== '/login') {
    console.info(123)
    next('/login')
    // NProgress.done()
  } else if (to.meta.permission) {
    // role === 'kaola' ? next() : next('/403')
    // NProgress.done()
  } else {
    next()
  }
})

router.afterEach(() => {
  // 结束进度条
  NProgress.done()
})

export default router
