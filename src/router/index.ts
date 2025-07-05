import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Galeria from '../views/Galeria.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/galeria', name: 'Galeria', component: Galeria },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
