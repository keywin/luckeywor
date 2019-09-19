import Vue from 'vue'
import Router from 'vue-router'

// 异步加载路由
const Login = () => import('@/components/Login.vue')
const Home = () => import('@/components/Home.vue')
const Index = () => import('@/components/index/Index.vue')
const Memory = () => import('@/components/memory/Index.vue')
const Now = () => import('@/components/now/Index.vue')
const Afterlife = () => import('@/components/afterlife/Index.vue')
const Mine = () => import('@/components/mine/Index.vue')

Vue.use(Router)

// 使用hash模式, 以防404页面找不到
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {title: '登录'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {title: '登录'}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
          meta: {title: '首页'}
        },
        {
          path: '/memory',
          name: 'Memory',
          component: Memory,
          meta: {title: '那时'}
        },
        {
          path: '/now',
          name: 'Now',
          component: Now,
          meta: {title: '后来'}
        },
        {
          path: '/afterlife',
          name: 'Afterlife',
          component: Afterlife,
          meta: {title: '来生'}
        },
        {
          path: '/mine',
          name: 'Mine',
          component: Afterlife,
          meta: {title: '个人中心'}
        }
      ]
    },
    {
      path: '*',
      name: 'notfind',
      component: resolve => require(['@/components/Notfind.vue'], resolve),
      meta: {title: '404'}
    }
  ]
})
