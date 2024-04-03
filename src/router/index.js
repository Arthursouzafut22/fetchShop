import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Relogios from '../views/Relogios.vue'
import Tenis from '../views/Tenis.vue'
import Roupas from '../views/Roupas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/relogios',
      name: 'relogios',
      component: Relogios,
    },
    {
      path: '/tenis',
      name: 'tenis',
      component: Tenis
    },
    {
      path: '/roupas',
      name: 'roupas',
      component: Roupas,
    }

  ]
})

export default router
