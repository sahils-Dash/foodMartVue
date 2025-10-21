import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Footer from './Footer.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/footer', component: Footer },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
