// import Vue from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
// createWebHashHistory

// Vue.use(Router)


import routes from './router'
import { configRouter } from './router'





const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'dc-exact-active',
  linkActiveClass: 'dc-active',
  scrollBehavior: () => ({ y: 0 }),
  routes,
  configRouter:configRouter
})

export default router