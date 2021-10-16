import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/refsShow.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/provide',
    name: 'About',
    component: () => import('../views/ProviderAndInject/index.vue'),
  },
  {
    path: '/vuexWay',
    name: 'About',
    component: () => import('../views/vuexWay/index.vue'),
  },
  {
    path: '/routerWay',
    name: 'About',
    component: () => import('../views/routerWay/index.vue'),
  },
  {
    path: '/routerIndex',
    name: 'About',
    component: () => import('../views/routerWay/components/ComA.vue'),
  },
  {
    path: '/tableShow',
    name: 'About',
    component: () => import('../views/tableShow/index.vue'),
  },
  {
    path: '/tableShow1/moblie',
    name: 'mobile',
    component: () => import('../views/tableShow/index1.vue'),
  },
  {
    path: '/tableShow1/noMoblie',
    name: 'nomoblie',
    component: () => import('../views/tableShow/index1.vue'),
  },
  {
    path: '/tableShow2',
    name: 'About',
    component: () => import('../views/tableShow/index2.vue'),
  },
  {
    path: '/sideBar',
    name: 'About',
    component: () => import('../views/tableShow/home.vue'),
  },
  {
    path: '/dynamic',
    name: 'About',
    component: () => import('../views/dynamic/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
