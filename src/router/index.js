import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Relogios from '../views/Relogios.vue'
import Tenis from '../views/Tenis.vue'
import Roupas from '../views/Roupas.vue'
import RelogiosPagina from '../views/RelogiosPagina.vue'
import TenisPaginas from '../views/TenisPaginas.vue'
import RoupasPaginas from '../views/RelogiosPagina.vue'
import Cart from '../views/Cart.vue'
import UsuarioForm from '../views/UsuarioForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/relogios',
      name: 'relogios',
      component: Relogios,
    },
    {
      path: '/relogios/:id',
      name: 'relogiospaginas',
      component: RelogiosPagina,
      props: true
    },
    {
      path: '/tenis',
      name: 'tenis',
      component: Tenis,
    },
    {
      path: '/tenis/:id',
      name: 'tenispaginas',
      component: TenisPaginas,
      props: true
    },
    {
      path: '/roupas',
      name: 'roupas',
      component: Roupas,
    },
    {
      path: '/roupas/:id',
      name: 'roupaspaginas',
      component: RoupasPaginas,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/dados',
      name: 'dados',
      component: UsuarioForm,
    }

  ]
})

export default router
