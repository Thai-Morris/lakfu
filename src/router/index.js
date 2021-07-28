import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Investorlogin from '../views/Investorlogin.vue'
const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/Investorlogin',
    name: 'Investorlogin',
    component: Investorlogin
  },
  {
    path: '/Entreprenurlogin',
    name: 'Entreprenurlogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Entrepreur.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
